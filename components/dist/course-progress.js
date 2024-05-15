"use strict";
exports.__esModule = true;
exports.CourseProgress = void 0;
var progress_1 = require("@/components/ui/progress");
var utils_1 = require("@/lib/utils");
;
var colorByVariant = {
    "default": "text-sky-700",
    success: "text-emerald-700"
};
var sizeByVariant = {
    "default": "text-sm",
    sm: "text-xs"
};
exports.CourseProgress = function (_a) {
    var value = _a.value, variant = _a.variant, size = _a.size;
    return (React.createElement("div", null,
        React.createElement(progress_1.Progress, { className: "h-2", value: value, variant: variant }),
        React.createElement("p", { className: utils_1.cn("font-medium mt-2 text-sky-700", colorByVariant[variant || "default"], sizeByVariant[size || "default"]) },
            Math.round(value),
            "% Complete")));
};
