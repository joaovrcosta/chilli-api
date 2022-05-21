import { container } from "tsyringe";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { Response, Request } from "express";

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, price, description, promotion_id } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    await createProductUseCase.execute({
      name,
      price,
      description,
      promotion_id,
    });

    return response.status(201).send();
  }
}

export { CreateProductController };
