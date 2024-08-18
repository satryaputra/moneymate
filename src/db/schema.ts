import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
    id: text('id').notNull(),
    name: text('name').notNull(),
});

export type User = typeof users.$inferSelect;