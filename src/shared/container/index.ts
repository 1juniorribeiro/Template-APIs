import { container } from 'tsyringe';

import { ITemplateRepository } from '../../modules/module2/repositories/IEntityRepository';
import { TemplateRepository } from '../../modules/module2/repositories/implementations/EntityRepository';

container.registerSingleton<ITemplateRepository>(
  'TemplatesRepository',
  TemplateRepository,
);
