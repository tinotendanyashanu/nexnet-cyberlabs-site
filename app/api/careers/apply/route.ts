import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { roleSlug, fullName, email } = body || {};

    if (!fullName || !email) {
      return NextResponse.json({ error: "fullName and email are required" }, { status: 400 });
    }

    // In a real app, forward to an ATS, send email, or persist securely.
    // For now, we just acknowledge receipt.
    const receivedAt = new Date().toISOString();
    return NextResponse.json({ ok: true, receivedAt, roleSlug: roleSlug || null });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Invalid request";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
