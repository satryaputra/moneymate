import { db } from "./index";
import * as schema from "./schema";

await db.insert(schema.users).values([
    {
        id: "1",
        name: "eka",
    },
]);

console.log(`Seeding complete.`);