import { getRepository, Repository } from "typeorm";
import { IPromotionRepository } from "../../../IRepositories/IPromotionRepository";

import { Promotion } from "../entities/Promotion";

class PromotionRepository implements IPromotionRepository {
  private repository: Repository<Promotion>;

  constructor() {
    this.repository = getRepository(Promotion);
  }

  async create({ 
    name 
  }): Promise<Promotion> {
    const promotion = this.repository.create({
      name,
    });

    await this.repository.save(promotion);

    return promotion
  }
}

export { PromotionRepository };