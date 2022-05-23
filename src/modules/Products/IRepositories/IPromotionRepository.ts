import { Promotion } from "../infra/typeorm/entities/Promotion";

interface ICreatePromotionDTO {
  name: string;
  compre: number;
  pague: number;
}

interface IPromotionRepository {
  create({ name, compre, pague }: ICreatePromotionDTO): Promise<Promotion>;
  findAll(id?: string, name?:string): Promise<Promotion[]>
}

export { IPromotionRepository };
