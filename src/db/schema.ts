import {
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const plansEnum = pgEnum("plans", [
  "free",
  "daily",
  "weekly",
  "monthly",
]);
export const usersTable = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    clerkId: varchar({ length: 255 }).unique().notNull(),
    name: varchar({ length: 255 }).notNull(),
    imageUrl: text("image_url").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    plan: plansEnum().default("free"),

    ipAddress: varchar({ length: 255 }),
    planExpiry: timestamp("plan_expiry")
      .$defaultFn(() => new Date(new Date().getTime() + 5 * 60000))
      .notNull(),
  },

  (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)]
);
