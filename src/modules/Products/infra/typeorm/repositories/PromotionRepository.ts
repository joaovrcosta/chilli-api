import { getRepository, Repository } from "typeorm";
import { Promotion } from "../entities/Promotion";
import { IPromotionRepository } from "../../../repositories/IPromotionRepository";

class PromotionRepository implements IPromotionRepository {
    private repository: Repository<Promotion>;
  
    constructor() {
      this.repository = getRepository(Promotion);
    }
  
    async create({name}): Promise<Promotion> {
      const category = this.repository.create({
        name,
      });
  
      await this.repository.save(category);
  
      return category
    }
  }
  
  export { PromotionRepository };