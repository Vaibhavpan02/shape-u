import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error("[COURSES]", error);

    // Check for specific error types and handle accordingly
    if (error instanceof ValidationError) {
      // Handle validation errors (e.g., invalid input)
      return new NextResponse(
        JSON.stringify({ error: "Validation failed", details: error.details }),
        { status: 422 } // Unprocessable Entity
      );
    }

    // Handle other errors
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

