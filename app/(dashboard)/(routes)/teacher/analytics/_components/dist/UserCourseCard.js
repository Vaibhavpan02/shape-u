"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UserCourseCard = function (_a) {
    var userName = _a.userName, avatarUrl = _a.avatarUrl, courses = _a.courses;
    return (react_1["default"].createElement("div", { className: "p-4 border rounded-lg shadow-sm flex flex-col items-center" },
        avatarUrl && react_1["default"].createElement("img", { src: avatarUrl, alt: userName + "'s avatar", className: "w-16 h-16 rounded-full mb-2" }),
        react_1["default"].createElement("h2", { className: "text-xl font-semibold mb-2" },
            "Identity: ",
            userName),
        react_1["default"].createElement("h3", { className: "text-lg font-medium mb-2" }, "Courses Published:"),
        react_1["default"].createElement("ul", { className: "list-disc list-inside" }, courses.map(function (course) { return (react_1["default"].createElement("li", { key: course.id }, course.title)); }))));
};
exports["default"] = UserCourseCard;
