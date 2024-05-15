"use strict";
exports.__esModule = true;
exports.formatPrice = void 0;
exports.formatPrice = function (price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR"
    }).format(price);
};
