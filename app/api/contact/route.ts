import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const name = String(data.get("name") || "");
  const email = String(data.get("email") || "");
  const message = String(data.get("message") || "");

  // TODO: Add validation, rate limiting, and CRM/email integration.
  console.log({ name, email, message });

  return NextResponse.json({ ok: true });
}
