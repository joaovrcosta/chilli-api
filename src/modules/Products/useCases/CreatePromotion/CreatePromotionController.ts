import { container } from "tsyringe";
import { CreatePromotionUseCase } from "./CreatePromotionUseCase";
import { Response, Request } from "express";


class CreatePromotionController {
    async handle(request: Request, response: Response):Promise<Response> {
        const { name } = request.body

        const createPromotionUseCase = container.resolve(CreatePromotionUseCase)

        await createPromotionUseCase.execute({ name });

        return response.status(201).send()
    }
}

export { CreatePromotionController }