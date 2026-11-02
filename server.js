const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const ROOT = __dirname;
const FILE_PATH = path.join(ROOT, "hotels.json");
const LISTINGS_PATH = path.join(ROOT, "listings.json");

/* Files that must never be served as static content */
const PRIVATE_FILES = new Set(["server.js", "hotels.json", "listings.json", "package.json", "package-lock.json"]);

const MIME = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
    ".woff2": "font/woff2",
    ".woff": "font/woff"
};

/* -------------------------
   Helpers
--------------------------*/

function readHotels() {
    try {
        const data = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

function writeHotels(hotels) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(hotels, null, 2));
}

function readListings() {
    try {
        const data = JSON.parse(fs.readFileSync(LISTINGS_PATH, "utf-8"));
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

function writeListings(listings) {
    fs.writeFileSync(LISTINGS_PATH, JSON.stringify(listings, null, 2));
}

function normalizeListingPayload(data) {
    const listing = {};
    for (const key of ["places", "gallery", "articles", "map"]) {
        listing[key] = String(data[key] ?? "").trim();
        if (!listing[key]) {
            return { ok: false, message: "All four fields are required" };
        }
        if (listing[key].length > 300) {
            return { ok: false, message: "Each field must be 300 characters or less" };
        }
    }
    return { ok: true, listing };
}

function readBody(req, res, onBody) {
    let body = "";
    let tooLarge = false;
    req.on("data", chunk => {
        body += chunk;
        if (body.length > 1e5) {
            tooLarge = true;
            req.destroy();
        }
    });
    req.on("end", () => {
        if (tooLarge) return;
        try {
            onBody(JSON.parse(body));
        } catch {
            sendJSON(res, 400, { message: "Invalid JSON" });
        }
    });
}

const CORS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
};

function sendJSON(res, status, data) {
    res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", ...CORS });
    res.end(JSON.stringify(data));
}

function serveStatic(req, res, pathname) {
    if (pathname === "/") {
        res.writeHead(302, { Location: "/main.html" });
        return res.end();
    }

    let relative;
    try {
        relative = decodeURIComponent(pathname);
    } catch {
        return sendJSON(res, 400, { message: "Bad request" });
    }

    const filePath = path.normalize(path.join(ROOT, relative));
    const inRoot = filePath.startsWith(ROOT + path.sep);
    const type = MIME[path.extname(filePath).toLowerCase()];

    if (!inRoot || !type || PRIVATE_FILES.has(path.basename(filePath))) {
        return sendJSON(res, 404, { message: "Route not found" });
    }

    fs.readFile(filePath, (err, content) => {
        if (err) return sendJSON(res, 404, { message: "Route not found" });
        res.writeHead(200, { "Content-Type": type });
        res.end(content);
    });
}

/* -------------------------
   Server
--------------------------*/

const server = http.createServer((req, res) => {
    const { pathname } = new URL(req.url, "http://localhost");
    const method = req.method;

    // CORS preflight
    if (method === "OPTIONS") {
        res.writeHead(204, CORS);
        return res.end();
    }

    // GET /listings
    if (method === "GET" && pathname === "/listings") {
        return sendJSON(res, 200, readListings());
    }

    // POST /listings
    if (method === "POST" && pathname === "/listings") {
        return readBody(req, res, data => {
            const normalized = normalizeListingPayload(data);
            if (!normalized.ok) {
                return sendJSON(res, 400, { message: normalized.message });
            }

            const newListing = { id: Date.now(), ...normalized.listing };
            const listings = readListings();
            listings.push(newListing);
            writeListings(listings);
            sendJSON(res, 201, newListing);
        });
    }

    // PUT /listings/:id
    if (method === "PUT" && pathname.startsWith("/listings/")) {
        const id = Number(pathname.split("/")[2]);
        if (!Number.isFinite(id)) {
            return sendJSON(res, 400, { message: "Invalid listing id" });
        }

        return readBody(req, res, data => {
            const normalized = normalizeListingPayload(data);
            if (!normalized.ok) {
                return sendJSON(res, 400, { message: normalized.message });
            }

            const listings = readListings();
            const index = listings.findIndex(item => item.id === id);
            if (index === -1) {
                return sendJSON(res, 404, { message: "Listing not found" });
            }

            listings[index] = { ...listings[index], ...normalized.listing };
            writeListings(listings);
            sendJSON(res, 200, listings[index]);
        });
    }

    // DELETE /listings/:id
    if (method === "DELETE" && pathname.startsWith("/listings/")) {
        const id = Number(pathname.split("/")[2]);
        if (!Number.isFinite(id)) {
            return sendJSON(res, 400, { message: "Invalid listing id" });
        }

        const listings = readListings();
        const index = listings.findIndex(item => item.id === id);
        if (index === -1) {
            return sendJSON(res, 404, { message: "Listing not found" });
        }

        listings.splice(index, 1);
        writeListings(listings);
        return sendJSON(res, 200, { ok: true });
    }

    // GET /hotels
    if (method === "GET" && pathname === "/hotels") {
        return sendJSON(res, 200, readHotels());
    }

    // GET /hotels/:id
    if (method === "GET" && pathname.startsWith("/hotels/")) {
        const id = Number(pathname.split("/")[2]);
        const hotel = readHotels().find(h => h.id === id);

        if (!hotel) {
            return sendJSON(res, 404, { message: "Hotel room not found" });
        }
        return sendJSON(res, 200, hotel);
    }

    // POST /hotels
    if (method === "POST" && pathname === "/hotels") {
        let body = "";
        let tooLarge = false;

        req.on("data", chunk => {
            body += chunk;
            if (body.length > 1e5) {
                tooLarge = true;
                req.destroy();
            }
        });

        req.on("end", () => {
            if (tooLarge) return;

            let data;
            try {
                data = JSON.parse(body);
            } catch {
                return sendJSON(res, 400, { message: "Invalid JSON" });
            }

            const hotelName = String(data.hotelName ?? "").trim();
            const roomType = String(data.roomType ?? "").trim();
            const availabilityStatus = String(data.availabilityStatus ?? "").trim();
            const rawPrice = data.pricePerNight;
            const pricePerNight = rawPrice === "" || rawPrice === null || rawPrice === undefined ? NaN : Number(rawPrice);

            if (!hotelName || !roomType || !availabilityStatus || Number.isNaN(pricePerNight)) {
                return sendJSON(res, 400, {
                    message: "Hotel Name, Room Type, Price per Night and Availability Status are required"
                });
            }
            if (!Number.isFinite(pricePerNight) || pricePerNight < 0) {
                return sendJSON(res, 400, { message: "Price per Night must be a number of 0 or more" });
            }

            const hotels = readHotels();
            const newHotel = {
                id: Date.now(),
                hotelName,
                roomType,
                pricePerNight,
                availabilityStatus // e.g. "Available" / "Booked"
            };
            hotels.push(newHotel);
            writeHotels(hotels);

            return sendJSON(res, 201, newHotel);
        });

        return;
    }

    // Everything else: static files (main.html, new.html, css, js, images)
    if (method === "GET") return serveStatic(req, res, pathname);

    sendJSON(res, 404, { message: "Route not found" });
});

server.listen(PORT, () => {
    console.log(`Hotel Booking API running at http://localhost:${PORT}`);
    console.log(`Admin panel:  http://localhost:${PORT}/main.html`);
    console.log(`Tourism site: http://localhost:${PORT}/new.html`);
});
























































































































































































































































































































































