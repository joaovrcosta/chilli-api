import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListPromotionsUseCase } from './ListPromotionsUseCase';


class ListPromotionsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id, name} = request.query;

        const listPromotionsUseCase = container.resolve(ListPromotionsUseCase)

        const promotions = await listPromotionsUseCase.execute({  
            id: id as string,
            name: name as string,
        })

        return response.json(promotions)
    }
}


export { ListPromotionsController }