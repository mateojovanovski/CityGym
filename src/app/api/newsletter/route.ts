import { NextResponse } from "next/server";
import { db } from "@/db";
import { newsletterSubscribers } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const rows = await db.select().from(newsletterSubscribers).orderBy(desc(newsletterSubscribers.createdAt)).limit(200);
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body ?? {};
    if (!email || !String(email).includes("@"))
      return NextResponse.json({ error: "Невалидна е-пошта" }, { status: 400 });
    try {
      const [row] = await db
        .insert(newsletterSubscribers)
        .values({ email: String(email).trim().toLowerCase() })
        .returning();
      return NextResponse.json(row, { status: 201 });
    } catch {
      return NextResponse.json({ error: "Оваа е-пошта е веќе пријавена" }, { status: 409 });
    }
  } catch {
    return NextResponse.json({ error: "Грешка" }, { status: 500 });
  }
}
