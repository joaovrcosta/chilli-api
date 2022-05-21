import { container } from 'tsyringe'
import { Response, Request } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase'

class CreateProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, value  } = request.body

        const createProductUseCase = container.resolve(CreateProductUseCase)

        const product = await createProductUseCase.execute({ name, value })
    
        return response.status(201).json(product)
    
    }
}

export { CreateProductController }