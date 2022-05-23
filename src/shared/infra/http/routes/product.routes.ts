import { Router } from "express";
import { CreateProductController } from "../../../../modules/Products/useCases/CreateProduct/CreateProductController";
import { ListProductController } from "../../../../modules/Products/useCases/ListProducts/ListProductController";

const productsRoutes = Router();

const createProductController = new CreateProductController()
const listProductController = new ListProductController()

productsRoutes.post("/",createProductController.handle);

productsRoutes.get("/list", listProductController.handle)

export { productsRoutes };