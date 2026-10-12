import { NextResponse } from "next/server";
import { db } from "@/db";
import { bookings, classes } from "@/db/schema";
import { eq, sql, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const rows = await db
      .select()
      .from(bookings)
      .orderBy(desc(bookings.createdAt))
      .limit(200);
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { classId, fullName, email, phone } = body ?? {};
    if (!classId || !fullName || String(fullName).trim().length < 3)
      return NextResponse.json({ error: "Името е задолжително" }, { status: 400 });
    if (!email || !String(email).includes("@"))
      return NextResponse.json({ error: "Невалидна е-пошта" }, { status: 400 });
    if (!phone || String(phone).trim().length < 6)
      return NextResponse.json({ error: "Телефонот е задолжителен" }, { status: 400 });

    const cls = await db.select().from(classes).where(eq(classes.id, Number(classId))).limit(1);
    if (!cls.length) return NextResponse.json({ error: "Терминот не постои" }, { status: 404 });
    const c = cls[0];
    if ((c.bookedCount ?? 0) >= (c.capacity ?? 20))
      return NextResponse.json({ error: "Терминот е пополнет" }, { status: 409 });

    const [row] = await db
      .insert(bookings)
      .values({ classId: Number(classId), fullName: String(fullName).trim(), email: String(email).trim(), phone: String(phone).trim() })
      .returning();

    await db
      .update(classes)
      .set({ bookedCount: sql`${classes.bookedCount} + 1` })
      .where(eq(classes.id, Number(classId)));

    return NextResponse.json(row, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Грешка при резервација" }, { status: 500 });
  }
}
