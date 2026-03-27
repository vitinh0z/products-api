import { CreateProductUseCase } from "../../../application/use-cases/CreateProductUseCase.js";
import type { RouteHandler } from "../routes/ProductsRouteHandlers.js";

export class CreateProductController {

    constructor(private readonly createProductUseCase: CreateProductUseCase) {
        this.createProductUseCase = createProductUseCase;
    }

    handle : RouteHandler = async (request, response): Promise<void> =>{

        try {
            const {name, price} = request.body;
            const product = await this.createProductUseCase.execute(name, price);
            response.status(201).json(product);
        } catch (error){
            response.status(400).json({ error: (error as Error).message});
        }
    }




}