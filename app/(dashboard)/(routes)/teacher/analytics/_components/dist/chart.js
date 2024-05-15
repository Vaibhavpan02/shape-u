// "use client";
// import {
//   Bar,
//   BarChart,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
// } from "recharts";
// import { Card } from "@/components/ui/card";
// interface ChartProps {
//   data: {
//     name: string;
//     total: number;
//   }[];
// }
// export const Chart = ({
//   data
// }: ChartProps) => {
//   return (
//     <Card>
//       <ResponsiveContainer width="100%" height={350}>
//         <BarChart data={data}>
//           <XAxis
//             dataKey="name"
//             stroke="#888888"
//             fontSize={12}
//             tickLine={false}
//             axisLine={false}
//           />
//           <YAxis
//             stroke="#888888"
//             fontSize={12}
//             tickLine={false}
//             axisLine={false}
//             tickFormatter={(value) => `$${value}`}
//           />
//           <Bar
//             dataKey="total"
//             fill="#0369a1"
//             radius={[4, 4, 0, 0]}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </Card>
//   )
// }
"use client";
"use strict";
exports.__esModule = true;
exports.Chart = void 0;
var recharts_1 = require("recharts");
var card_1 = require("@/components/ui/card");
exports.Chart = function (_a) {
    var data = _a.data;
    return (React.createElement(card_1.Card, null,
        React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 350 },
            React.createElement(recharts_1.BarChart, { data: data },
                React.createElement(recharts_1.XAxis, { dataKey: "month" // Use 'month' as the dataKey
                    , stroke: "#888888", fontSize: 12, tickLine: false, axisLine: false }),
                React.createElement(recharts_1.YAxis, { stroke: "#888888", fontSize: 12, tickLine: false, axisLine: false }),
                React.createElement(recharts_1.Tooltip, null),
                React.createElement(recharts_1.Bar, { dataKey: "count", fill: "#0369a1", radius: [4, 4, 0, 0] })))));
};
