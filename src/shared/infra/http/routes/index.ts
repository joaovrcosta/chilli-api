import { Router } from 'express';
import { productsRoutes } from './product.routes';

import { promotionsRoutes } from './promotions.routes';

const router = Router();

router.use("/promotions", promotionsRoutes )
router.use("/products", productsRoutes )

export { router }