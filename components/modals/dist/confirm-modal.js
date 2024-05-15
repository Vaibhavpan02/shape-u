"use client";
"use strict";
exports.__esModule = true;
exports.ConfirmModal = void 0;
var alert_dialog_1 = require("@/components/ui/alert-dialog");
;
exports.ConfirmModal = function (_a) {
    var children = _a.children, onConfirm = _a.onConfirm;
    return (React.createElement(alert_dialog_1.AlertDialog, null,
        React.createElement(alert_dialog_1.AlertDialogTrigger, { asChild: true }, children),
        React.createElement(alert_dialog_1.AlertDialogContent, null,
            React.createElement(alert_dialog_1.AlertDialogHeader, null,
                React.createElement(alert_dialog_1.AlertDialogTitle, null, "Are you sure?"),
                React.createElement(alert_dialog_1.AlertDialogDescription, null, "This action cannot be undone.")),
            React.createElement(alert_dialog_1.AlertDialogFooter, null,
                React.createElement(alert_dialog_1.AlertDialogCancel, null, "Cancel"),
                React.createElement(alert_dialog_1.AlertDialogAction, { onClick: onConfirm }, "Continue")))));
};
