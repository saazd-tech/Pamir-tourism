const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;
const FILE_PATH = path.join(ROOT, "hotels.json");
const LISTINGS_PATH = path.join(ROOT, "listings.json");
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
const CORS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
};

function readArray(filePath) {
    try {
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

function writeArray(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function sendJSON(res, status, data) {
    res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", ...CORS });
    res.end(JSON.stringify(data));
}

function readBody(req, res, callback) {
    let body = "";
    req.on("data", chunk => {
        body += chunk;
        if (body.length > 1e5) {
            sendJSON(res, 413, { message: "Request body too large" });
            req.destroy();
        }
    });
    req.on("end", () => {
        if (res.writableEnded) return;
        try {
            const data = JSON.parse(body);
            if (!data || typeof data !== "object" || Array.isArray(data)) {
                return sendJSON(res, 400, { message: "Invalid request body" });
            }
            callback(data);
        } catch {
            sendJSON(res, 400, { message: "Invalid JSON" });
        }
    });
}

function normalizeListingPayload(data) {
    const listing = {};
    const keys = ["places", "gallery", "articles", "map"];
    const requiredKeys = ["places", "articles", "map"];

    for (const key of keys) {
        const raw = data[key];
        listing[key] = raw === undefined || raw === null ? "" : String(raw).trim();
    }
    for (const key of requiredKeys) {
        if (!listing[key]) return { ok: false, message: "All required fields are required" };
    }
    for (const key of keys) {
        if (listing[key].length > 300) return { ok: false, message: "Each field must be 300 characters or less" };
    }
    return { ok: true, listing };
}

function serveStatic(res, pathname) {
    if (pathname === "/") {
        res.writeHead(302, { Location: "/main.html" });
        return res.end();
    }

    let decoded;
    try {
        decoded = decodeURIComponent(pathname);
    } catch {
        return sendJSON(res, 400, { message: "Bad request" });
    }

    const filePath = path.resolve(ROOT, `.${decoded}`);
    if (!filePath.startsWith(ROOT + path.sep) || PRIVATE_FILES.has(path.basename(filePath))) {
        return sendJSON(res, 404, { message: "Route not found" });
    }
    const type = MIME[path.extname(filePath).toLowerCase()];
    if (!type) return sendJSON(res, 404, { message: "Route not found" });

    fs.readFile(filePath, (error, content) => {
        if (error) return sendJSON(res, 404, { message: "Route not found" });
        res.writeHead(200, { "Content-Type": type });
        res.end(content);
    });
}

function normalizeHotel(data) {
    const hotelName = String(data.hotelName ?? "").trim();
    const roomType = String(data.roomType ?? "").trim();
    const availabilityStatus = String(data.availabilityStatus ?? "").trim();
    const rawPrice = data.pricePerNight;
    const pricePerNight = rawPrice === "" || rawPrice === null || rawPrice === undefined ? NaN : Number(rawPrice);
    if (!hotelName || !roomType || !availabilityStatus || Number.isNaN(pricePerNight)) {
        return { error: "Hotel Name, Room Type, Price per Night and Availability Status are required" };
    }
    if (!Number.isFinite(pricePerNight) || pricePerNight < 0) {
        return { error: "Price per Night must be a number of 0 or more" };
    }
    return { hotel: { hotelName, roomType, pricePerNight, availabilityStatus } };
}

const server = http.createServer((req, res) => {
    let pathname;
    try {
        pathname = new URL(req.url, "http://localhost").pathname;
    } catch {
        return sendJSON(res, 400, { message: "Bad request" });
    }
    const method = req.method;

    if (method === "OPTIONS") {
        res.writeHead(204, CORS);
        return res.end();
    }

    if (method === "GET" && pathname === "/listings") {
        return sendJSON(res, 200, readArray(LISTINGS_PATH));
    }
    if (method === "POST" && pathname === "/listings") {
        return readBody(req, res, data => {
            const result = normalizeListingPayload(data);
            if (!result.ok) return sendJSON(res, 400, { message: result.message });
            const listings = readArray(LISTINGS_PATH);
            const item = { id: Date.now(), ...result.listing };
            listings.push(item);
            writeArray(LISTINGS_PATH, listings);
            sendJSON(res, 201, item);
        });
    }
    if ((method === "PUT" || method === "DELETE") && pathname.startsWith("/listings/")) {
        const id = Number(pathname.split("/")[2]);
        if (!Number.isFinite(id)) return sendJSON(res, 400, { message: "Invalid listing id" });
        const listings = readArray(LISTINGS_PATH);
        const index = listings.findIndex(item => item.id === id);
        if (index === -1) return sendJSON(res, 404, { message: "Listing not found" });
        if (method === "DELETE") {
            listings.splice(index, 1);
            writeArray(LISTINGS_PATH, listings);
            return sendJSON(res, 200, { ok: true });
        }
        return readBody(req, res, data => {
            const result = normalizeListingPayload(data);
            if (!result.ok) return sendJSON(res, 400, { message: result.message });
            listings[index] = { ...listings[index], ...result.listing };
            writeArray(LISTINGS_PATH, listings);
            sendJSON(res, 200, listings[index]);
        });
    }

    if (method === "GET" && pathname === "/hotels") {
        return sendJSON(res, 200, readArray(FILE_PATH));
    }
    if (method === "GET" && pathname.startsWith("/hotels/")) {
        const id = Number(pathname.split("/")[2]);
        const hotel = readArray(FILE_PATH).find(item => item.id === id);
        return hotel ? sendJSON(res, 200, hotel) : sendJSON(res, 404, { message: "Hotel room not found" });
    }
    if (method === "POST" && pathname === "/hotels") {
        return readBody(req, res, data => {
            const result = normalizeHotel(data);
            if (result.error) return sendJSON(res, 400, { message: result.error });
            const hotels = readArray(FILE_PATH);
            const item = { id: Date.now(), ...result.hotel };
            hotels.push(item);
            writeArray(FILE_PATH, hotels);
            sendJSON(res, 201, item);
        });
    }

    if (method === "GET") return serveStatic(res, pathname);
    sendJSON(res, 404, { message: "Route not found" });
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Pamir tourism app listening on port ${PORT}`);
});
