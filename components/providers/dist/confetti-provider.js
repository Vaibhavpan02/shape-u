"use client";
"use strict";
exports.__esModule = true;
exports.ConfettiProvider = void 0;
var react_confetti_1 = require("react-confetti");
var use_confetti_store_1 = require("@/hooks/use-confetti-store");
exports.ConfettiProvider = function () {
    var confetti = use_confetti_store_1.useConfettiStore();
    if (!confetti.isOpen)
        return null;
    return (React.createElement(react_confetti_1["default"], { className: "pointer-events-none z-[100]", numberOfPieces: 500, recycle: false, onConfettiComplete: function () {
            confetti.onClose();
        } }));
};
