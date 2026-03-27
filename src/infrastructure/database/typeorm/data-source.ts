import "dotenv/config";

import { fileURLToPath } from "node:url";
import path from "node:path";
import { DataSource } from "typeorm";

import { ProductOrmEntity } from "./entities/ProductOrmEntity.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL nao definida. Configure em .env");
}

export const AppDataSource = new DataSource({
  type: "postgres",
  url: databaseUrl,
  ssl: { rejectUnauthorized: false },
  synchronize: false,
  logging: false,
  entities: [ProductOrmEntity],
  migrations: [path.join(__dirname, "migrations", "*.{ts,js}")],
});
