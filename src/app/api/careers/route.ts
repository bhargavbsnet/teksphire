import { NextResponse } from "next/server";
import { memoryDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, position, resumeUrl, portfolioUrl, coverLetter } = body;

    if (!fullName || !email || !position) {
      return NextResponse.json(
        { error: "Name, email, and position are required fields." },
        { status: 400 }
      );
    }

    const result = await memoryDb.saveApplication({
      fullName,
      email,
      position,
      resumeUrl,
      portfolioUrl,
      coverLetter,
    });

    return NextResponse.json(
      { message: "Candidate application received.", id: result.id },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Careers API error:", err);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
