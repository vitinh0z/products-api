import type { UUID } from "node:crypto";
import type { ProductRepository } from "../../domain/repositories/ProductRepository.js";

export class DeleteProductUseCase {

    constructor(private productRepository: ProductRepository){
        this.productRepository = productRepository;
    }

    async delete (id: UUID): Promise<void> {
         return await this.productRepository.deleteById(id);
    }
}