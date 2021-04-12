import ExampleEntity from '../entities/Entity';

interface ICreateTemplateDTO {
  example_column: string;
}

interface ITemplateRepository {
  create({ example_column }: ICreateTemplateDTO): Promise<void>;
  list(): Promise<ExampleEntity[]>;
  findByName({
    example_column,
  }: ICreateTemplateDTO): Promise<ExampleEntity | undefined>;
}

export { ICreateTemplateDTO, ITemplateRepository };
