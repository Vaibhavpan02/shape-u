"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var z = require("zod");
var axios_1 = require("axios");
var zod_1 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
var navigation_1 = require("next/navigation");
var link_1 = require("next/link");
var react_hot_toast_1 = require("react-hot-toast");
var form_1 = require("@/components/ui/form");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    })
});
var CreatePage = function () {
    var router = navigation_1.useRouter();
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    });
    var _a = form.formState, isSubmitting = _a.isSubmitting, isValid = _a.isValid;
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var response, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].post("/api/courses", values)];
                case 1:
                    response = _b.sent();
                    router.push("/teacher/courses/" + response.data.id);
                    react_hot_toast_1["default"].success("Course created");
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    react_hot_toast_1["default"].error("Something went wrong");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6" },
        React.createElement("div", null,
            React.createElement("h1", { className: "text-2xl" }, "Name your course"),
            React.createElement("p", { className: "text-sm text-slate-600" }, "What would you like to name your course? Don't worry, you can change this later."),
            React.createElement(form_1.Form, __assign({}, form),
                React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8 mt-8" },
                    React.createElement(form_1.FormField, { control: form.control, name: "title", render: function (_a) {
                            var field = _a.field;
                            return (React.createElement(form_1.FormItem, null,
                                React.createElement(form_1.FormLabel, null, "Course title"),
                                React.createElement(form_1.FormControl, null,
                                    React.createElement(input_1.Input, __assign({ disabled: isSubmitting, placeholder: "e.g. 'Advanced web development'" }, field))),
                                React.createElement(form_1.FormDescription, null, "What will you teach in this course?"),
                                React.createElement(form_1.FormMessage, null)));
                        } }),
                    React.createElement("div", { className: "flex items-center gap-x-2" },
                        React.createElement(link_1["default"], { href: "/" },
                            React.createElement(button_1.Button, { type: "button", variant: "ghost" }, "Cancel")),
                        React.createElement(button_1.Button, { type: "submit", disabled: !isValid || isSubmitting }, "Continue")))))));
};
exports["default"] = CreatePage;
