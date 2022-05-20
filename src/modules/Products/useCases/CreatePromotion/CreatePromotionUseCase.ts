import { inject, injectable } from "tsyringe";
import { IPromotionRepository } from "../../repositories/IPromotionRepository"

type IRequest = {
  name: string;
};

@injectable()
class CreatePromotionUseCase {
  constructor(
      @inject("PromotionRepository")
      private promotionRepository: IPromotionRepository
  ) {}


  async execute({ 
      name 
}: IRequest): Promise<void> {
      await this.promotionRepository.create({
          name,
      })
  }
}

export { CreatePromotionUseCase };
