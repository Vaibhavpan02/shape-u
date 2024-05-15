"use client";
"use strict";
exports.__esModule = true;
exports.columns = void 0;
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var badge_1 = require("@/components/ui/badge");
var utils_1 = require("@/lib/utils");
exports.columns = [
    {
        accessorKey: "title",
        header: function (_a) {
            var column = _a.column;
            return (React.createElement(button_1.Button, { variant: "ghost", onClick: function () { return column.toggleSorting(column.getIsSorted() === "asc"); } },
                "Title",
                React.createElement(lucide_react_1.ArrowUpDown, { className: "ml-2 h-4 w-4" })));
        }
    },
    {
        accessorKey: "price",
        header: function (_a) {
            var column = _a.column;
            return (React.createElement(button_1.Button, { variant: "ghost", onClick: function () { return column.toggleSorting(column.getIsSorted() === "asc"); } },
                "Price",
                React.createElement(lucide_react_1.ArrowUpDown, { className: "ml-2 h-4 w-4" })));
        },
        cell: function (_a) {
            var row = _a.row;
            var price = parseFloat(row.getValue("price") || "0");
            var formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR"
            }).format(price);
            return React.createElement("div", null, formatted);
        }
    },
    {
        accessorKey: "isPublished",
        header: function (_a) {
            var column = _a.column;
            return (React.createElement(button_1.Button, { variant: "ghost", onClick: function () { return column.toggleSorting(column.getIsSorted() === "asc"); } },
                "Published",
                React.createElement(lucide_react_1.ArrowUpDown, { className: "ml-2 h-4 w-4" })));
        },
        cell: function (_a) {
            var row = _a.row;
            var isPublished = row.getValue("isPublished") || false;
            return (React.createElement(badge_1.Badge, { className: utils_1.cn("bg-slate-500", isPublished && "bg-sky-700") }, isPublished ? "Published" : "Draft"));
        }
    },
    {
        id: "actions",
        cell: function (_a) {
            var row = _a.row;
            var id = row.original.id;
            return (React.createElement(dropdown_menu_1.DropdownMenu, null,
                React.createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true },
                    React.createElement(button_1.Button, { variant: "ghost", className: "h-4 w-8 p-0" },
                        React.createElement("span", { className: "sr-only" }, "Open menu"),
                        React.createElement(lucide_react_1.MoreHorizontal, { className: "h-4 w-4" }))),
                React.createElement(dropdown_menu_1.DropdownMenuContent, { align: "end" },
                    React.createElement(link_1["default"], { href: "/teacher/courses/" + id },
                        React.createElement(dropdown_menu_1.DropdownMenuItem, null,
                            React.createElement(lucide_react_1.Pencil, { className: "h-4 w-4 mr-2" }),
                            "Edit")))));
        }
    }
];
