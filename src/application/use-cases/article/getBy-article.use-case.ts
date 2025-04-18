import { Inject, Injectable } from '@nestjs/common';
import { IArticleRepository } from '../../../core/repositories/article.repository.js';
import { ArticleEntity } from '../../../core/entity/article.entity.js';

@Injectable()
export class GetByArticleUseCase {
  constructor(
    @Inject('IArticleRepository')
    private readonly articleRepository: IArticleRepository,
  ) {}
  async execute<T extends keyof ArticleEntity>(
    field: T,
    value: ArticleEntity[T],
  ) {
    return this.articleRepository.getBy(field, value);
  }
}
