import { inject, injectable } from "tsyringe";
import { Promotion } from "../../infra/typeorm/entities/Promotion";
import { IPromotionRepository } from "../../IRepositories/IPromotionRepository";


interface IRequest {
    id?: string;
    name?: string;
}

@injectable()
class ListPromotionsUseCase {
    constructor(
        @inject("PromotionRepository")
        private promotionsRepository: IPromotionRepository
    ) {}

    async execute({id, name}: IRequest): Promise<Promotion[]> {
        const promotions = await this.promotionsRepository.findAll(
            id,
            name,
        )
        return promotions
    }
}

export { ListPromotionsUseCase }