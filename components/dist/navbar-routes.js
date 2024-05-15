"use client";
"use strict";
exports.__esModule = true;
exports.NavbarRoutes = void 0;
var nextjs_1 = require("@clerk/nextjs");
var navigation_1 = require("next/navigation");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var button_1 = require("./ui/button");
exports.NavbarRoutes = function () {
    var pathname = navigation_1.usePathname();
    var isTeacherPage = pathname === null || pathname === void 0 ? void 0 : pathname.startsWith("/teacher");
    var isPlayerPage = pathname === null || pathname === void 0 ? void 0 : pathname.includes("/chapter");
    return (React.createElement("div", { className: "flex gap-x-2 ml-auto" },
        isTeacherPage || isPlayerPage ? (React.createElement(link_1["default"], { href: "/" },
            React.createElement(button_1.Button, { size: "sm", variant: "ghost" },
                React.createElement(lucide_react_1.LogOut, { className: "h-4 w-4 mr-2" }),
                "Exit"))) : (React.createElement(link_1["default"], { href: "/teacher/courses" },
            React.createElement(button_1.Button, { size: "sm", variant: "ghost" }, "Teacher Mode"))),
        React.createElement(nextjs_1.UserButton, { afterSignOutUrl: "/" })));
};
