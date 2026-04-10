import { NextResponse } from "next/server";
import { personalInfo } from "@/data/personal";

/**
 * Sends contact form via FormSubmit.co (free, no API key).
 * Optional: set CONTACT_INBOX_EMAIL in Vercel to override the inbox (defaults to personalInfo.email).
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }

  const o = body as Record<string, unknown>;
  const name = typeof o.name === "string" ? o.name.trim() : "";
  const email = typeof o.email === "string" ? o.email.trim() : "";
  const message = typeof o.message === "string" ? o.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ success: false, message: "Invalid email" }, { status: 400 });
  }

  const inbox =
    process.env.CONTACT_INBOX_EMAIL?.trim() || personalInfo.email;

  const url = `https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `Portfolio: message from ${name}`,
      _captcha: false,
    }),
  });

  let data: { success?: boolean | string; message?: string };
  try {
    data = (await res.json()) as { success?: boolean | string; message?: string };
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid response from form service" },
      { status: 502 }
    );
  }

  if (res.ok && (data.success === true || data.success === "true")) {
    return NextResponse.json({ success: true });
  }

  const detail =
    typeof data.message === "string" && data.message.trim()
      ? data.message.trim()
      : "Form service rejected the request. Try again or use email above.";
  return NextResponse.json({ success: false, message: detail }, { status: 502 });
}
