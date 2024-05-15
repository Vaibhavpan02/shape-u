"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var nextjs_1 = require("@clerk/nextjs");
var toaster_provider_1 = require("@/components/providers/toaster-provider");
var confetti_provider_1 = require("@/components/providers/confetti-provider");
var inter = google_1.Inter({ subsets: ['latin'] });
exports.metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement(nextjs_1.ClerkProvider, null,
        React.createElement("html", { lang: "en" },
            React.createElement("body", { className: inter.className },
                React.createElement(confetti_provider_1.ConfettiProvider, null),
                React.createElement(toaster_provider_1.ToastProvider, null),
                children))));
}
exports["default"] = RootLayout;
