import { Inject, Injectable } from '@nestjs/common';
import { IArticleRepository } from '../../../core/repositories/article.repository.js';
import { ArticleEntity } from '../../../core/entity/article.entity.js';
import { ArticleMapper } from '../../../infrastructure/mapper/article.mapper.js';

@Injectable()
export class SaveArticleUseCase {
  constructor(
    @Inject('IArticleRepository')
    private readonly articleRepository: IArticleRepository,
    private readonly articleMapper: ArticleMapper,
  ) {}
  async execute(article: ArticleEntity): Promise<ArticleEntity | undefined> {
    const existing = await this.articleRepository.getBy(
      'header',
      article.header,
    );

    if (existing) {
      existing.updateAllParams(article);
      return undefined;
    } else {
      return this.articleRepository.save(article);
    }
  }
}
