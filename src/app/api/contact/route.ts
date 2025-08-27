import { NextResponse } from "next/server";
import { submitContact } from "@/lib/cms";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    

    await submitContact(body);
    
    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
