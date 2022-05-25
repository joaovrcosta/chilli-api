import { Promotion, PromotionType } from "../infra/typeorm/entities/Promotion";

interface ICreatePromotionDTO {
  name: string;
  compre: number;
  pague: number;
  type: PromotionType;
}

interface IPromotionRepository {
  create(data: ICreatePromotionDTO): Promise<Promotion>;
  findAll(id?: string, name?:string): Promise<Promotion[]>
}

export { IPromotionRepository };
