import { NextResponse } from "next/server";
import { memoryDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, inquiryType, message } = body;

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Save record (gracefully uses Prisma if DATABASE_URL is set, else fallbacks to memory)
    const result = await memoryDb.saveContact({
      name,
      email,
      company,
      inquiryType,
      message,
    });

    return NextResponse.json(
      { message: "Contact inquiry recorded successfully.", id: result.id },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
