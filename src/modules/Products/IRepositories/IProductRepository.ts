import { ICreateProductDTO } from "../dto/ICreateProductDTO.";
import { Product } from "../infra/typeorm/entities/Product";


interface IProductRepository {

    create(data: ICreateProductDTO): Promise<Product>
}

export { IProductRepository }
