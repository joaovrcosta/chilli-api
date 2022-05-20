import { container } from 'tsyringe';
import { IPromotionRepository } from '../../modules/Products/repositories/IPromotionRepository';
import { PromotionRepository } from '../../modules/Products/infra/typeorm/repositories/PromotionRepository';

container.registerSingleton<IPromotionRepository>(
    "PromotionRepository",
    PromotionRepository
)
