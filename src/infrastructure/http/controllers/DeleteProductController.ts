import type { UUID } from "node:crypto";
import type { DeleteProductUseCase } from "../../../application/use-cases/DeleteProductUseCase.js";
import type { RouteHandler } from "../routes/ProductsRouteHandlers.js";

export class DeleteProductController {

    constructor(private readonly deleteProductUseCase: DeleteProductUseCase){
        this.deleteProductUseCase = deleteProductUseCase;
    }

    handle: RouteHandler = async (request, response): Promise<void> => {
        try{
            const { id } = request.params;
            if (!id || typeof id !== "string") {
                response.status(400).json({ error: "Id is required" });
                return;
            }

            // Express params are strings; validate before casting to UUID.
            const uuidRegex =
                /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

            if (!uuidRegex.test(id)) {
                response.status(400).json({ error: "Invalid id format" });
                return;
            }

            await this.deleteProductUseCase.delete(id as UUID);
            response.status(204).send();
        } catch (error) {
            response.status(500).json({ error: "Internal server error" });
        }
    }


}