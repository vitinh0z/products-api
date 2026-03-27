import type { ProductRepository } from "../../domain/repositories/ProductRepository.js";
import Product from "../../domain/entities/Product.js";

export class CreateProductUseCase {

    constructor(private readonly productRepository: ProductRepository
    ){
        this.productRepository = productRepository;
    }


    async execute (name: string, price: number): Promise<Product>{

        const newProduct = new Product(name, price);

        return await this.productRepository.save(newProduct);
        
    }
}