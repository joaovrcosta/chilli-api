import { Router } from "express";
import { CreatePromotionController } from "../../../../modules/Products/useCases/CreatePromotion/CreatePromotionController";
import { ListProductController } from "../../../../modules/Products/useCases/ListProducts/ListProductController";
import { ListPromotionsController } from "../../../../modules/Products/useCases/ListPromotions/ListPromotionsController";

const promotionsRoutes = Router();

const createPromotionController = new CreatePromotionController();
const listPromotionsController = new ListPromotionsController()

promotionsRoutes.post("/", createPromotionController.handle);

promotionsRoutes.get("/list", listPromotionsController.handle);

export { promotionsRoutes };
