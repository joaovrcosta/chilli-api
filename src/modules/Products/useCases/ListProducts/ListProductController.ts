import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListProductUseCase } from './ListProductUseCase';


class ListProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id, name} = request.query;

        const listProductsUseCase = container.resolve(ListProductUseCase)

        const products = await listProductsUseCase.execute({
            id: id as string,
            name: name as string,
        })

        return response.json(products)
    }
}

export { ListProductController };
