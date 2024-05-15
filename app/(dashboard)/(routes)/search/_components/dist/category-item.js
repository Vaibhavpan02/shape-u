"use client";
"use strict";
exports.__esModule = true;
exports.CategoryItem = void 0;
var query_string_1 = require("query-string");
var navigation_1 = require("next/navigation");
var utils_1 = require("@/lib/utils");
exports.CategoryItem = function (_a) {
    var label = _a.label, value = _a.value, Icon = _a.icon;
    var pathname = navigation_1.usePathname();
    var router = navigation_1.useRouter();
    var searchParams = navigation_1.useSearchParams();
    var currentCategoryId = searchParams.get("categoryId");
    var currentTitle = searchParams.get("title");
    var isSelected = currentCategoryId === value;
    var onClick = function () {
        var url = query_string_1["default"].stringifyUrl({
            url: pathname,
            query: {
                title: currentTitle,
                categoryId: isSelected ? undefined : value
            }
        }, { skipNull: true, skipEmptyString: true });
        router.push(url);
    };
    return (React.createElement("button", { onClick: onClick, className: utils_1.cn("py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition", isSelected && "border-sky-700 bg-sky-200/20 text-sky-800"), type: "button" },
        Icon && React.createElement(Icon, { size: 20 }),
        React.createElement("div", { className: "truncate" }, label)));
};
