function normalizeListingPayload(data) {
    const listing = {};
    const keys = ["places", "gallery", "articles", "map"];
    const requiredKeys = ["places", "articles", "map"];

    for (const key of keys) {
        const raw = data[key];
        listing[key] = raw === undefined || raw === null ? "" : String(raw).trim();
    }

    for (const key of requiredKeys) {
        if (!listing[key]) {
            return { ok: false, message: "All required fields are required" };
        }
    }

    for (const key of keys) {
        if (listing[key].length > 300) {
            return { ok: false, message: "Each field must be 300 characters or less" };
        }
    }

    return { ok: true, listing };
}
