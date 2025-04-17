import { Inject, Injectable } from '@nestjs/common';
import { IArticleRepository } from '../../../core/repositories/article.repository.js';

@Injectable()
export class GetByArticleUseCase {
  constructor(
    @Inject('IArticleRepository')
    private readonly articleRepository: IArticleRepository,
  ) {}
  async execute(field: string, value: string) {}
}
