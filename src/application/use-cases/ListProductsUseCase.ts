import type Product from "../../domain/entities/Product.js";
import type { ProductRepository } from "../../domain/repositories/ProductRepository.js";

export class ListProductsUseCase {

    constructor(private productRepository: ProductRepository){
        this.productRepository = productRepository;
    }

    async execute(): Promise<Product[]> {
        return this.productRepository.listAll();
    }

}