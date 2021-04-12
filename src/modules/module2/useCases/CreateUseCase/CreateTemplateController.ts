import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTemplateUseCase from './CreateCategoryUseCase';

export default class CreateTemplateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { example_column } = request.body;

    const createTemplateUseCase = container.resolve(CreateTemplateUseCase);
  }
}
