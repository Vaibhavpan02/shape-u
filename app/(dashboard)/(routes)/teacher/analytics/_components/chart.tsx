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

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { Card } from "@/components/ui/card";

interface CourseData {
  month: string; // Month label
  count: number; // Number of courses published
}

interface ChartProps {
  data: CourseData[]; // Data representing courses published per month
}

export const Chart = ({ data }: ChartProps) => {
  return (
    <Card>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="month" // Use 'month' as the dataKey
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Bar dataKey="count" fill="#0369a1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

