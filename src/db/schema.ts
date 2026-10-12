import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  boolean,
  timestamp,
  real,
} from "drizzle-orm/pg-core";

export const trainers = pgTable("trainers", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  roleMk: varchar("role_mk", { length: 120 }).notNull(),
  roleEn: varchar("role_en", { length: 120 }).notNull(),
  bioMk: text("bio_mk").notNull(),
  bioEn: text("bio_en").notNull(),
  specialties: text("specialties").notNull(),
  imageUrl: text("image_url").notNull(),
  instagram: varchar("instagram", { length: 120 }).default(""),
  experienceYears: integer("experience_years").default(3),
  rating: real("rating").default(4.8),
});

export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 80 }).notNull().unique(),
  titleMk: varchar("title_mk", { length: 160 }).notNull(),
  titleEn: varchar("title_en", { length: 160 }).notNull(),
  descMk: text("desc_mk").notNull(),
  descEn: text("desc_en").notNull(),
  longMk: text("long_mk").notNull(),
  longEn: text("long_en").notNull(),
  imageUrl: text("image_url").notNull(),
  icon: varchar("icon", { length: 40 }).default("dumbbell"),
  durationMin: integer("duration_min").default(60),
  intensity: integer("intensity").default(3),
  priceMonthly: integer("price_monthly").default(1500),
  category: varchar("category", { length: 60 }).default("fitness"),
});

export const pricingPlans = pgTable("pricing_plans", {
  id: serial("id").primaryKey(),
  nameMk: varchar("name_mk", { length: 120 }).notNull(),
  nameEn: varchar("name_en", { length: 120 }).notNull(),
  priceMkd: integer("price_mkd").notNull(),
  periodMk: varchar("period_mk", { length: 60 }).default("/ месечно"),
  periodEn: varchar("period_en", { length: 60 }).default("/ monthly"),
  featuresMk: text("features_mk").notNull(),
  featuresEn: text("features_en").notNull(),
  popular: boolean("popular").default(false),
  color: varchar("color", { length: 30 }).default("zinc"),
});

export const classes = pgTable("classes", {
  id: serial("id").primaryKey(),
  nameMk: varchar("name_mk", { length: 140 }).notNull(),
  nameEn: varchar("name_en", { length: 140 }).notNull(),
  trainerId: integer("trainer_id"),
  dayOfWeek: integer("day_of_week").notNull(),
  startTime: varchar("start_time", { length: 10 }).notNull(),
  endTime: varchar("end_time", { length: 10 }).notNull(),
  capacity: integer("capacity").default(20),
  bookedCount: integer("booked_count").default(0),
  room: varchar("room", { length: 80 }).default("Сала А"),
  intensity: integer("intensity").default(2),
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  classId: integer("class_id").notNull(),
  fullName: varchar("full_name", { length: 140 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  status: varchar("status", { length: 30 }).default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  titleMk: varchar("title_mk", { length: 220 }).notNull(),
  titleEn: varchar("title_en", { length: 220 }).notNull(),
  excerptMk: text("excerpt_mk").notNull(),
  excerptEn: text("excerpt_en").notNull(),
  contentMk: text("content_mk").notNull(),
  contentEn: text("content_en").notNull(),
  imageUrl: text("image_url").notNull(),
  categoryMk: varchar("category_mk", { length: 80 }).default("Фитнес"),
  categoryEn: varchar("category_en", { length: 80 }).default("Fitness"),
  author: varchar("author", { length: 120 }).default("City Gym Тим"),
  readingMin: integer("reading_min").default(5),
  publishedAt: timestamp("published_at").defaultNow(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 140 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }).default(""),
  subject: varchar("subject", { length: 200 }).default(""),
  message: text("message").notNull(),
  status: varchar("status", { length: 30 }).default("new"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const trialRequests = pgTable("trial_requests", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 140 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  goal: varchar("goal", { length: 120 }).default(""),
  preferredProgram: varchar("preferred_program", { length: 120 }).default(""),
  message: text("message").default(""),
  status: varchar("status", { length: 30 }).default("new"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 160 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 140 }).notNull(),
  textMk: text("text_mk").notNull(),
  textEn: text("text_en").notNull(),
  rating: integer("rating").default(5),
  program: varchar("program", { length: 120 }).default(""),
  imageUrl: text("image_url").default(""),
});
