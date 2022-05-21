import { Promotion } from "../infra/typeorm/entities/Promotion";

interface ICreatePromotionDTO {
  name: string;
}

interface IPromotionRepository {
  create({ name: string }: ICreatePromotionDTO): Promise<Promotion>;
}

export { IPromotionRepository };
