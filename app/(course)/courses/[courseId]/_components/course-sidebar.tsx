// import { auth } from "@clerk/nextjs";
// import { Chapter, Course, UserProgress } from "@prisma/client"
// import { redirect } from "next/navigation";

// import { db } from "@/lib/db";
// import { CourseProgress } from "@/components/course-progress";

// import { CourseSidebarItem } from "./course-sidebar-item";

// interface CourseSidebarProps {
//   course: Course & {
//     chapters: (Chapter & {
//       userProgress: UserProgress[] | null;
//     })[]
//   };
//   progressCount: number;
// };

// export const CourseSidebar = async ({
//   course,
//   progressCount,
// }: CourseSidebarProps) => {
//   const { userId } = auth();

//   if (!userId) {
//     return redirect("/");
//   }

//   const purchase = await db.purchase.findUnique({
//     where: {
//       userId_courseId: {
//         userId,
//         courseId: course.id,
//       }
//     }
//   });

//   return (
//     <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
//       <div className="p-8 flex flex-col border-b">
//         <h1 className="font-semibold">
//           {course.title}
//         </h1>
//         {purchase && (
//           <div className="mt-10">
//             <CourseProgress
//               variant="success"
//               value={progressCount}
//             />
//           </div>
//         )}
//       </div>
//       <div className="flex flex-col w-full">
//         {course.chapters.map((chapter) => (
//           <CourseSidebarItem
//             key={chapter.id}
//             id={chapter.id}
//             label={chapter.title}
//             isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
//             courseId={course.id}
//             isLocked={!chapter.isFree && !purchase}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// import { auth } from "@clerk/nextjs";
// import { Chapter, Course, UserProgress } from "@prisma/client"
// import { redirect } from "next/navigation";

// import { db } from "@/lib/db";
// import { CourseProgress } from "@/components/course-progress";

// import { CourseSidebarItem } from "./course-sidebar-item";

// interface CourseSidebarProps {
//   course: Course & {
//     chapters: (Chapter & {
//       userProgress: UserProgress[] | null;
//     })[]
//   };
// };

// export const CourseSidebar = async ({
//   course,
// }: CourseSidebarProps) => {
//   const { userId } = auth();

//   if (!userId) {
//     return redirect("/");
//   }

//   // Retrieve user's completed chapters for the course
//   const completedChapters = course.chapters.filter(chapter => chapter.userProgress?.[0]?.isCompleted);

//   // Calculate progress based on completed chapters count
//   const progressCount = completedChapters.length;

//   return (
//     <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
//       <div className="p-8 flex flex-col border-b">
//         <h1 className="font-semibold">
//           {course.title}
//         </h1>
//         <div className="mt-10">
//           <CourseProgress
//             variant="success"
//             value={progressCount}
//           />
//         </div>
//       </div>
//       <div className="flex flex-col w-full">
//         {course.chapters.map((chapter) => (
//           <CourseSidebarItem
//             key={chapter.id}
//             id={chapter.id}
//             label={chapter.title}
//             isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
//             courseId={course.id}
//             isLocked={!chapter.isFree && !completedChapters.includes(chapter)}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }




import { auth } from "@clerk/nextjs";
import { Chapter, Course, UserProgress } from "@prisma/client"
import { redirect } from "next/navigation";

import { getProgress } from "@/actions/get-progress"; // Import the getProgress function
import { CourseProgress } from "@/components/course-progress";
import { CourseSidebarItem } from "./course-sidebar-item";

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[]
  };
};

export const CourseSidebar = async ({
  course,
}: CourseSidebarProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  try {
    // Fetch the progress for the user and course
    const progressCount = await getProgress(userId, course.id);

    return (
      <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
        <div className="p-8 flex flex-col border-b">
          <h1 className="font-semibold">
            {course.title}
          </h1>
          <div className="mt-10">
            <CourseProgress
              variant="success"
              value={progressCount}
              total={course.chapters.length} // Pass the total number of chapters
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          {course.chapters.map((chapter) => (
            <CourseSidebarItem
              key={chapter.id}
              id={chapter.id}
              label={chapter.title}
              isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
              courseId={course.id}
              isLocked={!chapter.isFree && !chapter.userProgress?.[0]?.isCompleted} // Check if chapter is not free and not completed
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching progress:", error);
    return null; // Handle error gracefully, you can show an error message or return null
  }
}
