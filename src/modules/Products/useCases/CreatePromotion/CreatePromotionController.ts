import { container } from "tsyringe";
import { CreatePromotionUseCase } from "./CreatePromotionUseCase";
import { Response, Request } from "express";

class CreatePromotionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, compre, pague, type } = request.body;

    console.log(request.body)

    const createPromotionUseCase = container.resolve(CreatePromotionUseCase);

    await createPromotionUseCase.execute({ name, compre, pague, type });

    return response.status(201).send();
  }
}

export { CreatePromotionController };
