import { db } from "@/lib/db"; // Adjust this import according to your project's structure
import { users } from "@clerk/clerk-sdk-node"; // Clerk SDK import

// Function to get user information
export const getUserInfo = async (userId: string) => {
  try {
    const user = await users.getUser(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return {
      id: user.id,
      name: user.fullName || user.username || "Authorized User",
      avatarUrl: user.profileImageUrl || null,
    };
  } catch (error) {
    console.error("[GET_USER_INFO]", error);
    throw new Error("Failed to fetch user information");
  }
};

// Function to get user's published courses
export const getUserPublishedCourses = async (userId: string) => {
  try {
    const courses = await db.course.findMany({
      where: {
        userId: userId,
        isPublished: true,
      },
      select: {
        id: true,
        title: true,
      },
    });

    return courses;
  } catch (error) {
    console.error("[GET_USER_PUBLISHED_COURSES]", error);
    throw new Error("Failed to fetch user's published courses");
  }
};
