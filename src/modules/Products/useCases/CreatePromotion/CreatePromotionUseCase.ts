import { inject, injectable } from "tsyringe";
import { IPromotionRepository } from "../../IRepositories/IPromotionRepository"

type IRequest = {
  name: string;
  compre: number;
  pague: number;
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
}: IRequest): Promise<void> {
      await this.promotionRepository.create({
          name,
          compre,
          pague,
      })
  }
}

export { CreatePromotionUseCase };
