import { container } from 'tsyringe';
import { IPromotionRepository } from '../../modules/Products/IRepositories/IPromotionRepository';
import { PromotionRepository } from '../../modules/Products/infra/typeorm/repositories/PromotionRepository';
import { IProductRepository } from '../../modules/Products/IRepositories/IProductRepository';
import { ProductRepository } from '../../modules/Products/infra/typeorm/repositories/ProductRepository';

container.registerSingleton<IPromotionRepository>(
    "PromotionRepository",
    PromotionRepository
)

container.registerSingleton<IProductRepository>(
    "ProductRepository",
    ProductRepository
)