import { NextResponse } from "next/server";

/** Prefer server-only env on Vercel; NEXT_PUBLIC_ fallback supports older setups. */
function getWeb3Key(): string {
  return (
    process.env.WEB3FORMS_ACCESS_KEY ??
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
    ""
  ).trim();
}

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

  const access_key = getWeb3Key();
  if (!access_key) {
    return NextResponse.json(
      { success: false, message: "not_configured" },
      { status: 503 }
    );
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key,
      subject: `Portfolio: message from ${name}`,
      from_name: name,
      name,
      email,
      message,
    }),
  });

  let data: { success?: boolean; message?: string };
  try {
    data = (await res.json()) as { success?: boolean; message?: string };
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid response from form service" },
      { status: 502 }
    );
  }

  if (!res.ok || !data.success) {
    const detail = data.message?.trim() || "Submit failed";
    return NextResponse.json({ success: false, message: detail }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
