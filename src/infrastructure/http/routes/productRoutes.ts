import { Router } from "express";
import type { ProductsRouteHandlers } from "./ProductsRouteHandlers.js";

export class ProductsRoutes {
	private readonly router: Router;

	constructor(private readonly handlers: ProductsRouteHandlers) {
		this.router = Router();
		this.registerRoutes();
	}

	private registerRoutes(): void {
		this.router.post("/products", this.handlers.create);
		this.router.get("/products", this.handlers.list);
		this.router.get("/products/:id", this.handlers.findById);
		this.router.put("/products/:id", this.handlers.update);
		this.router.delete("/products/:id", this.handlers.remove);
	}

	getRouter(): Router {
		return this.router;
	}
}

