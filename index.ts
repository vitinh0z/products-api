import "reflect-metadata";

import { AppDataSource } from "./src/infrastructure/database/typeorm/data-source.js";

async function bootstrap(): Promise<void> {
	await AppDataSource.initialize();
	console.log("Conexao com Supabase (Postgres) iniciada com TypeORM");
}

bootstrap().catch((error) => {
	console.error("Erro ao iniciar conexao do banco:", error);
	process.exit(1);
});
