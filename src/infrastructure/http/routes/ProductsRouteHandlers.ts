import type { Request, Response } from "express";

export type RouteHandler = (req: Request, res: Response) => Promise<void> | void;

export interface ProductsRouteHandlers {
	create: RouteHandler;
	list: RouteHandler;
	findById: RouteHandler;
	update: RouteHandler;
	remove: RouteHandler;
}
