import type { UUID } from "node:crypto";
import Product from "../entities/Product.js";

export interface ProductRepository {
	save(product: Product): Promise<Product>;
	listAll(): Promise<Product[]>;
    deleteById(id: UUID): Promise<void>;
	findById(id: UUID): Promise<Product>;
}
