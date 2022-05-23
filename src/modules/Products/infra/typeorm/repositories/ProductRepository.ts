import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../../../dtos/ICreateProductDTO.";
import { IProductRepository } from "../../../IRepositories/IProductRepository";
import { Product } from "../entities/Product";

class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  

  async create({
    name,
    price,
    description,
    promotion_id,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create({
      name,
      price,
      description,
      promotion_id,
    });

    await this.repository.save(product);

    return product;
  }

  async findAll(id?: string, name?: string): Promise<Product[]> {
    const productsQuery = await this.repository.createQueryBuilder("p");

    if (id) {
      productsQuery.andWhere("p.id = :id", { id })
    }

    if (name) {
      productsQuery.andWhere("p.name = :name", { name })
    }
    
    const products = await productsQuery.getMany()

    return products
  }

}

export { ProductRepository };
