import { getRepository, Repository } from 'typeorm';

import ExampleEntity from '../../entities/Entity';
import { ICreateTemplateDTO, ITemplateRepository } from '../IEntityRepository';

export class TemplateRepository implements ITemplateRepository {
  private repository: Repository<ExampleEntity>;

  constructor() {
    this.repository = getRepository(ExampleEntity);
  }
  async findByName({
    example_column,
  }: ICreateTemplateDTO): Promise<ExampleEntity | undefined> {
    const template = await this.repository.findOne({
      example_column,
    });

    return template;
  }

  async create({ example_column }: ICreateTemplateDTO): Promise<void> {
    await console.log('implements here operation in database');
  }
  async list(): Promise<ExampleEntity[]> {
    const entities = await this.repository.find();

    return entities;
  }
}
