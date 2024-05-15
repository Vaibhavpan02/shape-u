"use strict";
exports.__esModule = true;
exports.stripe = void 0;
var stripe_1 = require("stripe");
exports.stripe = new stripe_1["default"](process.env.STRIPE_API_KEY, {
    apiVersion: "2024-04-10",
    typescript: true
});
