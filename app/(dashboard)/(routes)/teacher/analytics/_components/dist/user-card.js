"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UserCourseCard = function (_a) {
    var userName = _a.userName, courses = _a.courses;
    return (react_1["default"].createElement("div", { className: "p-4 border rounded-lg shadow-sm" },
        react_1["default"].createElement("h2", { className: "text-xl font-semibold mb-2" }, userName),
        react_1["default"].createElement("h3", { className: "text-lg font-medium" }, "Published Courses:"),
        react_1["default"].createElement("ul", { className: "list-disc list-inside" }, courses.map(function (course) { return (react_1["default"].createElement("li", { key: course.id }, course.title)); }))));
};
exports["default"] = UserCourseCard;
