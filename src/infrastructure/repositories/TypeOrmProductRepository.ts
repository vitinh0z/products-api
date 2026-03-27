import type { UUID } from "node:crypto";

import Product from "../../domain/entities/Product.js";
import type { ProductRepository } from "../../domain/repositories/ProductRepository.js";
import { AppDataSource } from "../database/typeorm/data-source.js";
import { ProductOrmEntity } from "../database/typeorm/entities/ProductOrmEntity.js";

export class TypeOrmProductRepository implements ProductRepository {

  private readonly repository = AppDataSource.getRepository(ProductOrmEntity);


  async findById(id: UUID): Promise<Product> {
    const entity = await this.repository.findOneBy({ id: id as string });

    if (!entity) throw new Error("Product not found");

    return new Product(entity.name, entity.price, entity.id as UUID);
    
  }

  async deleteById(id: UUID): Promise<void> {
    const entity = await this.repository.findOneBy({ id: id as string });
    if (!entity) throw new Error("Product not found");
    await this.repository.delete(entity);
  }
  

  async save(product: Product): Promise<Product> {
    const entity = this.repository.create({
      id: product.getId() as string,
      name: product.getName(),
      price: product.getPrice(),
    });

    const saved = await this.repository.save(entity);
    return new Product(saved.name, saved.price, saved.id as UUID);
  }

  async listAll(): Promise<Product[]> {
    const entities = await this.repository.find();
    return entities.map((entity) => {
      return new Product(entity.name, entity.price, entity.id as UUID);
    });
  }
}
