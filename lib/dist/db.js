"use strict";
exports.__esModule = true;
exports.db = void 0;
var client_1 = require("@prisma/client");
;
exports.db = globalThis.prisma || new client_1.PrismaClient();
if (process.env.NODE_ENV !== "production")
    globalThis.prisma = exports.db;
// File: "@/lib/db/validationError.js"
