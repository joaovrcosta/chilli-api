import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../IRepositories/IProductRepository";

type IRequest = {
    name: string,
    value: number;
}

injectable()
class CreateProductUseCase {

    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository
    ) {}


    async execute({
        name,
        value
    } :IRequest): Promise<void> {
        await this.productRepository.create({
            name,
            value,
        })
    }
}

export { CreateProductUseCase }