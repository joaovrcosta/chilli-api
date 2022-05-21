import { getRepository, Repository } from "typeorm";
import { IProductRepository } from "../../../IRepositories/IProductRepository";
import { Product } from "../entities/Product";

class PromotionRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create({ name, value }): Promise<Product> {
    const product = this.repository.create({
      name,
      value,
    });

    await this.repository.save(product);

    return product
  }
}

export { PromotionRepository };