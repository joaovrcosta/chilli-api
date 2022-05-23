import { inject, injectable } from "tsyringe";
import { Product } from "../../infra/typeorm/entities/Product";
import { IProductRepository } from "../../IRepositories/IProductRepository";

interface IRequest {
    id?: string;
    name?: string;
}

@injectable()
class ListProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productsRepository: IProductRepository
) {}

        async execute({id, name}: IRequest): Promise<Product[]> {
            const products = await this.productsRepository.findAll(
                id,
                name
            );
            return products
        }

}
export { ListProductUseCase }