// import { Category, Chapter, Course } from "@prisma/client";

// import { db } from "@/lib/db";
// import { getProgress } from "@/actions/get-progress";

// type CourseWithProgressWithCategory = Course & {
//   category: Category;
//   chapters: Chapter[];
//   progress: number | null;
// };

// type DashboardCourses = {
//   completedCourses: CourseWithProgressWithCategory[];
//   coursesInProgress: CourseWithProgressWithCategory[];
// }

// export const getDashboardCourses = async (userId: string): Promise<DashboardCourses> => {
//   try {
//     const purchasedCourses = await db.purchase.findMany({
//       where: {
//         userId: userId,
//       },
//       select: {
//         course: {
//           include: {
//             category: true,
//             chapters: {
//               where: {
//                 isPublished: true,
//               }
//             }
//           }
//         }
//       }
//     });

//     const courses = purchasedCourses.map((purchase) => purchase.course) as CourseWithProgressWithCategory[];

//     for (let course of courses) {
//       const progress = await getProgress(userId, course.id);
//       course["progress"] = progress;
//     }

//     const completedCourses = courses.filter((course) => course.progress === 100);
//     const coursesInProgress = courses.filter((course) => (course.progress ?? 0) < 100);

//     return {
//       completedCourses,
//       coursesInProgress,
//     }
//   } catch (error) {
//     console.log("[GET_DASHBOARD_COURSES]", error);
//     return {
//       completedCourses: [],
//       coursesInProgress: [],
//     }
//   }
// }

import { Category, Chapter, Course, UserProgress } from "@prisma/client";
import { db } from "@/lib/db";
import { getProgress } from "@/actions/get-progress";

type CourseWithProgressWithCategory = Course & {
  category: Category;
  chapters: Chapter[];
  progress: number | null;
};

type DashboardCourses = {
  completedCourses: CourseWithProgressWithCategory[];
  coursesInProgress: CourseWithProgressWithCategory[];
}

export const getDashboardCourses = async (userId: string): Promise<DashboardCourses> => {
  try {
    // Fetch all published courses with their chapters
    const publishedCourses = await db.course.findMany({
      where: {
        isPublished: true,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          include: {
            userProgress: {
              where: {
                userId: userId,
              },
            },
          },
        },
      },
    });

    // Calculate progress for each published course
    const coursesWithProgress: CourseWithProgressWithCategory[] = [];
    publishedCourses.forEach((course) => {
      const progress = calculateCourseProgress(course.chapters);
      if (progress !== null) {
        coursesWithProgress.push({
          ...course,
          progress: progress,
        });
      }
    });

    // Filter completed and in-progress courses
    const completedCourses = coursesWithProgress.filter((course) => course.progress === 100);
    const coursesInProgress = coursesWithProgress.filter((course) => (course.progress ?? 0) < 100);

    return {
      completedCourses,
      coursesInProgress,
    }
  } catch (error) {
    console.error("[GET_DASHBOARD_COURSES]", error);
    return {
      completedCourses: [],
      coursesInProgress: [],
    }
  }
}

const calculateCourseProgress = (chapters: Chapter[]): number | null => {
  const completedChaptersCount = chapters.filter((chapter) => {
    return chapter.userProgress.some((progress: UserProgress) => progress.isCompleted);
  }).length;

  const totalChaptersCount = chapters.length;

  if (totalChaptersCount === 0) {
    return null;
  }

  return (completedChaptersCount / totalChaptersCount) * 100;
};
