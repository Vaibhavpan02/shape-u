"use strict";
exports.__esModule = true;
var Navbar_1 = require("./_components/Navbar");
var sidebar_1 = require("./_components/sidebar");
var DashboardLayout = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "h-full" },
        React.createElement("div", { className: "h-[80px] md:pl-56 fixed inset-y-0 w-full z-50" },
            React.createElement(Navbar_1.Navbar, null)),
        React.createElement("div", { className: "hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50" },
            React.createElement(sidebar_1.Sidebar, null)),
        React.createElement("main", { className: "md:pl-56 pt-[80px]  h-full" }, children)));
};
exports["default"] = DashboardLayout;
