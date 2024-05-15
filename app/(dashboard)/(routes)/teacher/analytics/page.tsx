import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { getAnalytics } from "@/actions/get-analytics";
import { getUserInfo, getUserPublishedCourses } from "@/actions/user-data";

import { DataCard } from "./_components/data-card";
// import { Chart } from "./_components/chart";
import UserCourseCard from "./_components/UserCourseCard";

const AnalyticsPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const { data, totalRevenue, totalSales } = await getAnalytics(userId);
  const userInfo = await getUserInfo(userId);
  const publishedCourses = await getUserPublishedCourses(userId);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard
          label="Total Revenue"
          value={totalRevenue}
          shouldFormat
        />
        <DataCard
          label="Total Sales"
          value={totalSales}
        />
        <UserCourseCard
          userName={userInfo.name}
          avatarUrl={userInfo.avatarUrl}
          courses={publishedCourses}
        />
      </div>
      {/* <Chart data={data} /> */}
    </div>
  );
}

export default AnalyticsPage;


