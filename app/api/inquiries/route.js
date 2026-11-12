import { NextResponse } from "next/server";
import { appendInquiry } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const brief = String(body?.brief || "").trim();

    if (!name || !email || !phone || !brief) {
      return NextResponse.json(
        { success: false, message: "Name, email, phone, and project brief are required." },
        { status: 400 }
      );
    }

    const record = appendInquiry({
      name,
      company: String(body?.company || "").trim(),
      email,
      phone,
      service: String(body?.service || "General Inquiry").trim(),
      timeline: String(body?.timeline || "Standard").trim(),
      brief,
    });

    return NextResponse.json({ success: true, inquiry: record });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Failed to save inquiry" }, { status: 500 });
  }
}
