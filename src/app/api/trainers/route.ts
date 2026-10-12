import { NextResponse } from "next/server";
import { db } from "@/db";
import { trainers } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const rows = await db.select().from(trainers);
    return NextResponse.json(rows);
  } catch (e) {
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}
