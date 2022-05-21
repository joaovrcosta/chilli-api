import { ICreateProductDTO } from "../dtos/ICreateProductDTO.";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductRepository {
  create({name, price, description, promotion_id}: ICreateProductDTO): Promise<Product>;
}

export { IProductRepository };
