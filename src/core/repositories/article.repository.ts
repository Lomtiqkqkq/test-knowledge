import type { ArticleEntity } from '../entity/article.entity.js';

export interface IArticleRepository {
  get(): Promise<ArticleEntity[] | null>;
  getBy<T extends keyof ArticleEntity>(
    field: T,
    value: ArticleEntity[T],
  ): Promise<ArticleEntity | null>;
  save(article: ArticleEntity): Promise<ArticleEntity>;
  delete(articleId: string): Promise<void>;
}
