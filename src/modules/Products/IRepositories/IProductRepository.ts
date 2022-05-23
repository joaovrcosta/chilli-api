import { ICreateProductDTO } from "../dtos/ICreateProductDTO.";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductRepository {
  create({name, price, description, promotion_id}: ICreateProductDTO): Promise<Product>;
  findAll(id?: string, name?: string): Promise<Product[]>
}

export { IProductRepository };
