import type { UUID } from "node:crypto";
import type { ProductRepository } from "../../domain/repositories/ProductRepository.js";
import type Product from "../../domain/entities/Product.js";

export class FindProductUseCase{

    constructor(private productRepository: ProductRepository){
        this.productRepository = productRepository;
    }


    async execute (id: UUID): Promise<Product>{
        const products = await this.productRepository.findById(id);
        return products;
    }

}