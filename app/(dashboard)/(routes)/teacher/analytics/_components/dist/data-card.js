"use strict";
// // import { 
// //   Card, 
// //   CardContent, 
// //   CardHeader,
// //   CardTitle
// // } from "@/components/ui/card";
// // import { formatPrice } from "@/lib/format";
exports.__esModule = true;
exports.DataCard = void 0;
// // interface DataCardProps {
// //   value: number;
// //   label: string;
// //   shouldFormat?: boolean;
// // }
// // export const DataCard = ({
// //   value,
// //   label,
// //   shouldFormat,
// // }: DataCardProps) => {
// //   return (
// //    <Card>
// //     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
// //       <CardTitle className="text-sm font-medium">
// //         {label}
// //       </CardTitle>
// //     </CardHeader>
// //     <CardContent>
// //       <div className="text-2xl font-bold">
// //         {shouldFormat ? formatPrice(value) : value}
// //       </div>
// //     </CardContent>
// //    </Card>
// //   )
// // }
// import { 
//   Card, 
//   CardContent, 
//   CardHeader,
//   CardTitle
// } from "@/components/ui/card";
// import { formatPrice } from "@/lib/format";
// interface DataCardProps {
//   value: number;
//   label: string;
//   shouldFormat?: boolean;
// }
// export const DataCard = ({
//   value,
//   label,
//   shouldFormat,
// }: DataCardProps) => {
//   return (
//    <Card>
//     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//       <CardTitle className="text-sm font-medium">
//         {label}
//       </CardTitle>
//     </CardHeader>
//     <CardContent>
//       <div className="text-2xl font-bold">
//         {shouldFormat ? formatPrice(value) : value}
//       </div>
//     </CardContent>
//    </Card>
//   )
// }
var card_1 = require("@/components/ui/card");
var format_1 = require("@/lib/format");
exports.DataCard = function (_a) {
    var value = _a.value, label = _a.label, shouldFormat = _a.shouldFormat;
    return (React.createElement(card_1.Card, null,
        React.createElement(card_1.CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2" },
            React.createElement(card_1.CardTitle, { className: "text-sm font-medium" }, label)),
        React.createElement(card_1.CardContent, null,
            React.createElement("div", { className: "text-2xl font-bold" }, shouldFormat ? format_1.formatPrice(value) : value))));
};
