"use strict";
exports.__esModule = true;
exports.CourseCard = void 0;
var image_1 = require("next/image");
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
var icon_badge_1 = require("@/components/icon-badge");
var format_1 = require("@/lib/format");
var course_progress_1 = require("@/components/course-progress");
;
exports.CourseCard = function (_a) {
    var id = _a.id, title = _a.title, imageUrl = _a.imageUrl, chaptersLength = _a.chaptersLength, price = _a.price, progress = _a.progress, category = _a.category;
    return (React.createElement(link_1["default"], { href: "/courses/" + id },
        React.createElement("div", { className: "group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full" },
            React.createElement("div", { className: "relative w-full aspect-video rounded-md overflow-hidden" },
                React.createElement(image_1["default"], { fill: true, className: "object-cover", alt: title, src: imageUrl })),
            React.createElement("div", { className: "flex flex-col pt-2" },
                React.createElement("div", { className: "text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2" }, title),
                React.createElement("p", { className: "text-xs text-muted-foreground" }, category),
                React.createElement("div", { className: "my-3 flex items-center gap-x-2 text-sm md:text-xs" },
                    React.createElement("div", { className: "flex items-center gap-x-1 text-slate-500" },
                        React.createElement(icon_badge_1.IconBadge, { size: "sm", icon: lucide_react_1.BookOpen }),
                        React.createElement("span", null,
                            chaptersLength,
                            " ",
                            chaptersLength === 1 ? "Chapter" : "Chapters"))),
                progress !== null ? (React.createElement(course_progress_1.CourseProgress, { variant: progress === 100 ? "success" : "default", size: "sm", value: progress })) : (React.createElement("p", { className: "text-md md:text-sm font-medium text-slate-700" }, format_1.formatPrice(price)))))));
};
