import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const rows = await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt)).limit(200);
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body ?? {};
    if (!name || String(name).trim().length < 2)
      return NextResponse.json({ error: "Името е задолжително" }, { status: 400 });
    if (!email || !String(email).includes("@"))
      return NextResponse.json({ error: "Невалидна е-пошта" }, { status: 400 });
    if (!message || String(message).trim().length < 5)
      return NextResponse.json({ error: "Пораката е прекратка" }, { status: 400 });

    const [row] = await db
      .insert(contactMessages)
      .values({
        name: String(name).trim(),
        email: String(email).trim(),
        phone: String(phone ?? "").trim(),
        subject: String(subject ?? "").trim(),
        message: String(message).trim(),
      })
      .returning();
    return NextResponse.json(row, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Грешка при испраќање" }, { status: 500 });
  }
}
