import { NextResponse } from "next/server";
import { memoryDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const result = await memoryDb.saveSubscriber(email);

    return NextResponse.json(
      { message: "Subscription successfully registered.", id: result.id },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Newsletter API error:", err);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
