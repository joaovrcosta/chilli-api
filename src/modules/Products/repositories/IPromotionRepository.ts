import { Promotion } from "../infra/typeorm/entities/Promotion";


interface ICreateCategoryDTO {
    name: string;
  }


interface IPromotionRepository {
   
    create({name: string}: ICreateCategoryDTO): Promise<Promotion>
}

export { IPromotionRepository }