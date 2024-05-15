import { db } from "@/lib/db";

export const getProgress = async (
  userId: string,
  courseId: string,
): Promise<number> => {
  try {
    // Fetch all published chapters for the given course
    const publishedChapters = await db.chapter.findMany({
      where: {
        courseId: courseId,
        isPublished: true,
      },
      select: {
        id: true,
      },
    });

    // Extract chapter IDs
    const publishedChapterIds = publishedChapters.map((chapter) => chapter.id);

    // If there are no published chapters, return 0% progress
    if (publishedChapterIds.length === 0) {
      return 0;
    }

    // Count valid completed chapters by the user
    const validCompletedChaptersCount = await db.userProgress.count({
      where: {
        userId: userId,
        chapterId: {
          in: publishedChapterIds,
        },
        isCompleted: true,
      },
    });

    // Calculate progress as a percentage
    const progressPercentage = (validCompletedChaptersCount / publishedChapterIds.length) * 100;

    // Ensure the result is a number
    return progressPercentage;
  } catch (error) {
    console.error("[GET_PROGRESS]", error);
    return 0;
  }
}
