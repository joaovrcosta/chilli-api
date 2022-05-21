import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../IRepositories/IProductRepository";

type IRequest = {
  name: string;
  price: number;
  description: string;
  promotion_id?: string;
};

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute({
    name,
    price,
    description,
    promotion_id,
  }: IRequest): Promise<void> {
    
    await this.productRepository.create({
      name,
      price,
      description,
      promotion_id,
    });
  }
}

export { CreateProductUseCase };
