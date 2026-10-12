import { NextResponse } from "next/server";
import { db } from "@/db";
import { classes, trainers } from "@/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const rows = await db
      .select({
        id: classes.id,
        nameMk: classes.nameMk,
        nameEn: classes.nameEn,
        trainerId: classes.trainerId,
        trainerName: trainers.name,
        dayOfWeek: classes.dayOfWeek,
        startTime: classes.startTime,
        endTime: classes.endTime,
        capacity: classes.capacity,
        bookedCount: classes.bookedCount,
        room: classes.room,
        intensity: classes.intensity,
      })
      .from(classes)
      .leftJoin(trainers, eq(classes.trainerId, trainers.id));
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}
