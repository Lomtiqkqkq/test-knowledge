import { Injectable } from '@nestjs/common';
import { IArticleRepository } from '../../core/repositories/article.repository.js';
import { ArticleEntity } from '../../core/entity/article.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleTypeormService implements IArticleRepository {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  delete(articleId: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  get(): Promise<ArticleEntity[] | null> {
    return Promise.resolve(undefined);
  }

  getBy<T extends keyof ArticleEntity>(
    field: T,
    value: ArticleEntity[T],
  ): Promise<ArticleEntity | null> {
    return Promise.resolve(undefined);
  }

  save(article: ArticleEntity): Promise<ArticleEntity> {
    return Promise.resolve(undefined);
  }
}
