"use client";
"use strict";
exports.__esModule = true;
exports.SearchInput = void 0;
var query_string_1 = require("query-string");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var input_1 = require("@/components/ui/input");
var use_debounce_1 = require("@/hooks/use-debounce");
exports.SearchInput = function () {
    var _a = react_1.useState(""), value = _a[0], setValue = _a[1];
    var debouncedValue = use_debounce_1.useDebounce(value);
    var searchParams = navigation_1.useSearchParams();
    var router = navigation_1.useRouter();
    var pathname = navigation_1.usePathname();
    var currentCategoryId = searchParams.get("categoryId");
    react_1.useEffect(function () {
        var url = query_string_1["default"].stringifyUrl({
            url: pathname,
            query: {
                categoryId: currentCategoryId,
                title: debouncedValue
            }
        }, { skipEmptyString: true, skipNull: true });
        router.push(url);
    }, [debouncedValue, currentCategoryId, router, pathname]);
    return (React.createElement("div", { className: "relative" },
        React.createElement(lucide_react_1.Search, { className: "h-4 w-4 absolute top-3 left-3 text-slate-600" }),
        React.createElement(input_1.Input, { onChange: function (e) { return setValue(e.target.value); }, value: value, className: "w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200", placeholder: "Search for a course" })));
};
