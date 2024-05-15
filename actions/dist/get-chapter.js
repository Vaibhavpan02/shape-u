"use strict";
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
exports.getChapter = void 0;
var db_1 = require("@/lib/db");
exports.getChapter = function (_a) {
    var userId = _a.userId, courseId = _a.courseId, chapterId = _a.chapterId;
    return __awaiter(void 0, void 0, void 0, function () {
        var course, chapter, muxData, attachments, nextChapter, userProgress, purchase, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 8, , 9]);
                    return [4 /*yield*/, db_1.db.course.findUnique({
                            where: {
                                isPublished: true,
                                id: courseId
                            },
                            select: {
                                price: true
                            }
                        })];
                case 1:
                    course = _b.sent();
                    return [4 /*yield*/, db_1.db.chapter.findUnique({
                            where: {
                                id: chapterId,
                                isPublished: true
                            }
                        })];
                case 2:
                    chapter = _b.sent();
                    if (!chapter || !course) {
                        throw new Error("Chapter or course not found");
                    }
                    muxData = null;
                    attachments = [];
                    nextChapter = null;
                    return [4 /*yield*/, db_1.db.attachment.findMany({
                            where: {
                                courseId: courseId
                            }
                        })];
                case 3:
                    attachments = _b.sent();
                    return [4 /*yield*/, db_1.db.muxData.findUnique({
                            where: {
                                chapterId: chapterId
                            }
                        })];
                case 4:
                    muxData = _b.sent();
                    return [4 /*yield*/, db_1.db.chapter.findFirst({
                            where: {
                                courseId: courseId,
                                isPublished: true,
                                position: {
                                    gt: chapter === null || chapter === void 0 ? void 0 : chapter.position
                                }
                            },
                            orderBy: {
                                position: "asc"
                            }
                        })];
                case 5:
                    nextChapter = _b.sent();
                    return [4 /*yield*/, db_1.db.userProgress.findUnique({
                            where: {
                                userId_chapterId: {
                                    userId: userId,
                                    chapterId: chapterId
                                }
                            }
                        })];
                case 6:
                    userProgress = _b.sent();
                    return [4 /*yield*/, db_1.db.purchase.findUnique({
                            where: {
                                userId_courseId: {
                                    userId: userId,
                                    courseId: courseId
                                }
                            }
                        })];
                case 7:
                    purchase = _b.sent();
                    return [2 /*return*/, {
                            chapter: chapter,
                            course: course,
                            muxData: muxData,
                            attachments: attachments,
                            nextChapter: nextChapter,
                            userProgress: userProgress,
                            purchase: purchase
                        }];
                case 8:
                    error_1 = _b.sent();
                    console.log("[GET_CHAPTER]", error_1);
                    return [2 /*return*/, {
                            chapter: null,
                            course: null,
                            muxData: null,
                            attachments: [],
                            nextChapter: null,
                            userProgress: null,
                            purchase: null
                        }];
                case 9: return [2 /*return*/];
            }
        });
    });
};
