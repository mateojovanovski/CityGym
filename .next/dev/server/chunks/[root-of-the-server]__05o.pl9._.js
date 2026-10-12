module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/small-business-website-project/src/db/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db,
    "pool",
    ()=>pool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/node_modules/drizzle-orm/node-postgres/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/Downloads/small-business-website-project/node_modules/pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("DATABASE_URL is required");
}
const globalForDb = globalThis;
const pool = globalForDb.__arenaNextJsPostgresqlPool ?? new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$pg$29$__["Pool"]({
    connectionString: databaseUrl
});
if ("TURBOPACK compile-time truthy", 1) {
    globalForDb.__arenaNextJsPostgresqlPool = pool;
}
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(pool);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/small-business-website-project/src/db/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts,
    "bookings",
    ()=>bookings,
    "classes",
    ()=>classes,
    "contactMessages",
    ()=>contactMessages,
    "newsletterSubscribers",
    ()=>newsletterSubscribers,
    "pricingPlans",
    ()=>pricingPlans,
    "programs",
    ()=>programs,
    "testimonials",
    ()=>testimonials,
    "trainers",
    ()=>trainers,
    "trialRequests",
    ()=>trialRequests
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/node_modules/drizzle-orm/pg-core/columns/serial.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/node_modules/drizzle-orm/pg-core/columns/integer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/node_modules/drizzle-orm/pg-core/columns/real.js [app-route] (ecmascript)");
;
const trainers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("trainers", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("name", {
        length: 120
    }).notNull(),
    roleMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("role_mk", {
        length: 120
    }).notNull(),
    roleEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("role_en", {
        length: 120
    }).notNull(),
    bioMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("bio_mk").notNull(),
    bioEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("bio_en").notNull(),
    specialties: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("specialties").notNull(),
    imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("image_url").notNull(),
    instagram: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("instagram", {
        length: 120
    }).default(""),
    experienceYears: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("experience_years").default(3),
    rating: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["real"])("rating").default(4.8)
});
const programs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("programs", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    slug: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("slug", {
        length: 80
    }).notNull().unique(),
    titleMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("title_mk", {
        length: 160
    }).notNull(),
    titleEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("title_en", {
        length: 160
    }).notNull(),
    descMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("desc_mk").notNull(),
    descEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("desc_en").notNull(),
    longMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("long_mk").notNull(),
    longEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("long_en").notNull(),
    imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("image_url").notNull(),
    icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("icon", {
        length: 40
    }).default("dumbbell"),
    durationMin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("duration_min").default(60),
    intensity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("intensity").default(3),
    priceMonthly: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("price_monthly").default(1500),
    category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("category", {
        length: 60
    }).default("fitness")
});
const pricingPlans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("pricing_plans", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    nameMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("name_mk", {
        length: 120
    }).notNull(),
    nameEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("name_en", {
        length: 120
    }).notNull(),
    priceMkd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("price_mkd").notNull(),
    periodMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("period_mk", {
        length: 60
    }).default("/ месечно"),
    periodEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("period_en", {
        length: 60
    }).default("/ monthly"),
    featuresMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("features_mk").notNull(),
    featuresEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("features_en").notNull(),
    popular: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("popular").default(false),
    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("color", {
        length: 30
    }).default("zinc")
});
const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("classes", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    nameMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("name_mk", {
        length: 140
    }).notNull(),
    nameEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("name_en", {
        length: 140
    }).notNull(),
    trainerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("trainer_id"),
    dayOfWeek: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("day_of_week").notNull(),
    startTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("start_time", {
        length: 10
    }).notNull(),
    endTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("end_time", {
        length: 10
    }).notNull(),
    capacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("capacity").default(20),
    bookedCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("booked_count").default(0),
    room: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("room", {
        length: 80
    }).default("Сала А"),
    intensity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("intensity").default(2)
});
const bookings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("bookings", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    classId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("class_id").notNull(),
    fullName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("full_name", {
        length: 140
    }).notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("email", {
        length: 160
    }).notNull(),
    phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("phone", {
        length: 40
    }).notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("status", {
        length: 30
    }).default("pending"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow()
});
const blogPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("blog_posts", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    slug: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("slug", {
        length: 120
    }).notNull().unique(),
    titleMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("title_mk", {
        length: 220
    }).notNull(),
    titleEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("title_en", {
        length: 220
    }).notNull(),
    excerptMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("excerpt_mk").notNull(),
    excerptEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("excerpt_en").notNull(),
    contentMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("content_mk").notNull(),
    contentEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("content_en").notNull(),
    imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("image_url").notNull(),
    categoryMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("category_mk", {
        length: 80
    }).default("Фитнес"),
    categoryEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("category_en", {
        length: 80
    }).default("Fitness"),
    author: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("author", {
        length: 120
    }).default("City Gym Тим"),
    readingMin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("reading_min").default(5),
    publishedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("published_at").defaultNow()
});
const contactMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("contact_messages", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("name", {
        length: 140
    }).notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("email", {
        length: 160
    }).notNull(),
    phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("phone", {
        length: 40
    }).default(""),
    subject: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("subject", {
        length: 200
    }).default(""),
    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("message").notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("status", {
        length: 30
    }).default("new"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow()
});
const trialRequests = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("trial_requests", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    fullName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("full_name", {
        length: 140
    }).notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("email", {
        length: 160
    }).notNull(),
    phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("phone", {
        length: 40
    }).notNull(),
    goal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("goal", {
        length: 120
    }).default(""),
    preferredProgram: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("preferred_program", {
        length: 120
    }).default(""),
    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("message").default(""),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("status", {
        length: 30
    }).default("new"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow()
});
const newsletterSubscribers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("newsletter_subscribers", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("email", {
        length: 160
    }).notNull().unique(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow()
});
const testimonials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("testimonials", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("name", {
        length: 140
    }).notNull(),
    textMk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("text_mk").notNull(),
    textEn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("text_en").notNull(),
    rating: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("rating").default(5),
    program: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("program", {
        length: 120
    }).default(""),
    imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("image_url").default("")
});
}),
"[project]/Downloads/small-business-website-project/src/app/api/schedule/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/src/db/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/src/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/small-business-website-project/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const dynamic = "force-dynamic";
async function GET() {
    try {
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"].id,
            nameMk: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"].nameMk,
            nameEn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"].nameEn,
            trainerId: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"].trainerId,
            trainerName: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["trainers"].name,
            dayOfWeek: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"].dayOfWeek,
            startTime: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"].startTime,
            endTime: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"].endTime,
            capacity: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"].capacity,
            bookedCount: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"].bookedCount,
            room: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"].room,
            intensity: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"].intensity
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"]).leftJoin(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["trainers"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classes"].trainerId, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["trainers"].id));
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(rows);
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$small$2d$business$2d$website$2d$project$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "DB error"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05o.pl9._.js.map