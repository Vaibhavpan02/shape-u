"use client";
"use strict";
exports.__esModule = true;
exports.SidebarRoutes = void 0;
var lucide_react_1 = require("lucide-react");
var sidebar_item_1 = require("./sidebar-item");
var navigation_1 = require("next/navigation");
var guestRoutes = [
    {
        icon: lucide_react_1.Compass,
        label: "Browse",
        href: "/search"
    },
    {
        icon: lucide_react_1.Layout,
        label: "Dashboard",
        href: "/"
    },
];
var teacherRoutes = [
    {
        icon: lucide_react_1.List,
        label: "Courses",
        href: "/teacher/courses"
    },
    {
        icon: lucide_react_1.BarChart,
        label: "Analytics",
        href: "/teacher/analytics"
    },
];
exports.SidebarRoutes = function () {
    var pathname = navigation_1.usePathname();
    var isTeacherPage = pathname === null || pathname === void 0 ? void 0 : pathname.includes("/teacher");
    var routes = isTeacherPage ? teacherRoutes : guestRoutes;
    return (React.createElement("div", { className: "flex flex-col w-full" }, routes.map(function (route) { return (React.createElement(sidebar_item_1.SidebarItem, { key: route.href, icon: route.icon, label: route.label, href: route.href })); })));
};
