import { Injectable } from '@nestjs/common';
import { IArticleRepository } from '../../core/repositories/article.repository.js';
import { ArticleEntity } from '../../core/entity/article.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleMapper } from '../mapper/article.mapper.js';
import { ArticleTypeormModel } from '../models/article.typeorm.model.js';

@Injectable()
export class ArticleTypeormService implements IArticleRepository {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleTypeormModel>,
    private readonly articleMapper: ArticleMapper,
  ) {}

  async delete(articleId: string): Promise<void> {
    await this.articleRepository.delete({ id: articleId });
  }

  async get(tags?: string[]): Promise<ArticleEntity[] | null> {
    if (!tags?.length) {
      const all = await this.articleRepository.find();
      return all.map((entity) => {
        return this.articleMapper.toDomainEntity(entity);
      });
    }
    const queryBuilder = this.articleRepository
      .createQueryBuilder('article')
      .where('article.tags @> :tags', { tags });
    const articles = await queryBuilder.getMany();
    return articles.map((article) =>
      this.articleMapper.toDomainEntity(article),
    );
  }

  async getBy<T extends keyof ArticleEntity>(
    field: T,
    value: ArticleEntity[T],
  ): Promise<ArticleEntity | null> {
    const result = await this.articleRepository.findOne({
      where: { [field]: value },
    });
    if (!result) {
      return null;
    }
    return this.articleMapper.toDomainEntity(result);
  }

  async save(article: ArticleEntity): Promise<ArticleEntity | undefined> {
    const ormArticle = this.articleMapper.toOrmEntity(article);
    const candidate = await this.getBy('header', article.header);
    if (candidate) {
      await this.articleRepository.update(ormArticle.id, { ...ormArticle });
      return;
    } else {
      const newArticle = this.articleRepository.create(ormArticle);
      return this.articleMapper.toDomainEntity(newArticle);
    }
  }
}
