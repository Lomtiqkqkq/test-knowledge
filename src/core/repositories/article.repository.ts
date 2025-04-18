import type { ArticleEntity } from '../entity/article.entity.js';

export interface IArticleRepository {
  get(tags?: string[]): Promise<ArticleEntity[] | null>;
  getBy<T extends keyof ArticleEntity>(
    field: T,
    value: ArticleEntity[T],
  ): Promise<ArticleEntity | null>;
  save(article: ArticleEntity): Promise<ArticleEntity | undefined>;
  delete(articleId: string): Promise<void>;
}
