import { NextResponse } from "next/server";
import { db } from "@/db";
import { trialRequests } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const rows = await db.select().from(trialRequests).orderBy(desc(trialRequests.createdAt)).limit(200);
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, goal, preferredProgram, message } = body ?? {};
    if (!fullName || String(fullName).trim().length < 3)
      return NextResponse.json({ error: "Името е задолжително" }, { status: 400 });
    if (!email || !String(email).includes("@"))
      return NextResponse.json({ error: "Невалидна е-пошта" }, { status: 400 });
    if (!phone || String(phone).trim().length < 6)
      return NextResponse.json({ error: "Телефонот е задолжителен" }, { status: 400 });

    const [row] = await db
      .insert(trialRequests)
      .values({
        fullName: String(fullName).trim(),
        email: String(email).trim(),
        phone: String(phone).trim(),
        goal: String(goal ?? ""),
        preferredProgram: String(preferredProgram ?? ""),
        message: String(message ?? ""),
      })
      .returning();
    return NextResponse.json(row, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Грешка при пријава" }, { status: 500 });
  }
}
