import { inject, injectable } from 'tsyringe';

import AppError from '../../../../errors/AppError';
import { ITemplateRepository } from '../../repositories/IEntityRepository';

interface IRequest {
  example_column: string;
}

@injectable()
export default class CreateTemplateUseCase {
  constructor(
    @inject('TemplateRepository')
    private templatesRepository: ITemplateRepository,
  ) {}

  async execute({ example_column }: IRequest): Promise<void> {
    const templateExists = await this.templatesRepository.findByName(
      example_column,
    );
  }
}
