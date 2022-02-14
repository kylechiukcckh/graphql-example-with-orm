CREATE TABLE sqlite_sequence(name,seq);
CREATE TABLE IF NOT EXISTS "user" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "age" int2 NOT NULL, "gender" character(1) NOT NULL, "email" varchar NOT NULL, "COB" nvarchar(6) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime);
