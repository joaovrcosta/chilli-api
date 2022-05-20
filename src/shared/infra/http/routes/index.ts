import { Router } from 'express';

import { promotionsRoutes } from './promotions.routes';

const router = Router();

router.use("/promotions", promotionsRoutes )

export { router }