import { Router } from "express";
import { CreatePromotionController } from "../../../../modules/Products/useCases/CreatePromotion/CreatePromotionController";

const promotionsRoutes = Router();

const createCategoryController = new CreatePromotionController();

promotionsRoutes.post(
    "/",
    createCategoryController.handle
);

export { promotionsRoutes };