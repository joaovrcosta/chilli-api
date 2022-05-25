import { inject, injectable } from "tsyringe";
import { PromotionType } from "../../infra/typeorm/entities/Promotion";
import { IPromotionRepository } from "../../IRepositories/IPromotionRepository"

type IRequest = {
  name: string;
  compre: number;
  pague: number;
  type: PromotionType
};

@injectable()
class CreatePromotionUseCase {
  constructor(
      @inject("PromotionRepository")
      private promotionRepository: IPromotionRepository
  ) {}


  async execute({ 
      name,
      compre,
      pague,
      type
}: IRequest): Promise<void> {
      await this.promotionRepository.create({
          name,
          compre,
          pague,
          type
      })
  }
}

export { CreatePromotionUseCase };
