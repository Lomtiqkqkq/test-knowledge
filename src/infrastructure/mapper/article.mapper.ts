import { Injectable } from '@nestjs/common';
import { ArticleEntity } from '../../core/entity/article.entity.js';
import { ArticleTypeormModel } from '../models/article.typeorm.model.js';

@Injectable()
export class ArticleMapper {
  toOrmEntity(articleEntity: ArticleEntity): ArticleTypeormModel {
    const ormArticle = new ArticleTypeormModel();
    ormArticle.header = articleEntity.getHeader();
    ormArticle.description = articleEntity.getDescription();
    ormArticle.tags = articleEntity.getTags();
    ormArticle.typeArticle = articleEntity.getTypeArticle();
    return ormArticle;
  }
  toDomainEntity(articleTypeOrmModel: ArticleTypeormModel): ArticleEntity {
    return new ArticleEntity(
      articleTypeOrmModel.header,
      articleTypeOrmModel.description,
      articleTypeOrmModel.tags,
      articleTypeOrmModel.typeArticle,
    );
  }
}
