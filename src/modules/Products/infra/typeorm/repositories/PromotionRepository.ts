import { getRepository, Repository } from "typeorm";
import { IPromotionRepository } from "../../../IRepositories/IPromotionRepository";

import { Promotion } from "../entities/Promotion";

class PromotionRepository implements IPromotionRepository {
  private repository: Repository<Promotion>;

  constructor() {
    this.repository = getRepository(Promotion);
  }

  async create({ name, compre, pague }): Promise<Promotion> {
    const promotion = this.repository.create({
      name,
      compre,
      pague,
    });

    await this.repository.save(promotion);

    return promotion;
  }

  async findAll(
    id?: string,
    name?: string,
  ): Promise<Promotion[]> {
    const promotionsQuery = await this.repository.createQueryBuilder("r");

    if (id) {
      promotionsQuery.andWhere("r.id = :id", { id });
    }

    if (name) {
      promotionsQuery.andWhere("r.name = :name", { name });
    }

    const promotions = await promotionsQuery.getMany();

    return promotions;
  }
}

export { PromotionRepository };
