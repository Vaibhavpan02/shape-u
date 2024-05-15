"use strict";

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

exports.__esModule = true;

var nextjs_1 = require("@clerk/nextjs");

var navigation_1 = require("next/navigation");

var lucide_react_1 = require("lucide-react");

var get_dashboard_courses_1 = require("@/actions/get-dashboard-courses");

var courses_list_1 = require("@/components/courses-list");

var info_card_1 = require("../_components/info-card");

function Dashboard() {
  return __awaiter(this, void 0, void 0, function () {
    var userId, _a, completedCourses, coursesInProgress;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          userId = nextjs_1.auth().userId;

          if (!userId) {
            return [2
            /*return*/
            , navigation_1.redirect("/")];
          }

          return [4
          /*yield*/
          , get_dashboard_courses_1.getDashboardCourses(userId)];

        case 1:
          _a = _b.sent(), completedCourses = _a.completedCourses, coursesInProgress = _a.coursesInProgress;
          return [2
          /*return*/
          , React.createElement("div", {
            className: "p-6 space-y-4"
          }, React.createElement("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
          }, React.createElement(info_card_1.InfoCard, {
            icon: lucide_react_1.Clock,
            label: "In Progress",
            numberOfItems: coursesInProgress.length
          }), React.createElement(info_card_1.InfoCard, {
            icon: lucide_react_1.CheckCircle,
            label: "Completed",
            numberOfItems: completedCourses.length,
            variant: "success"
          })), React.createElement(courses_list_1.CoursesList, {
            items: __spreadArrays(coursesInProgress, completedCourses)
          }))];
      }
    });
  });
}

exports["default"] = Dashboard;