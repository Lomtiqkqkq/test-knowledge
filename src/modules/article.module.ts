import { Module } from '@nestjs/common';
import { ArticleController } from '../presentation/controller/article.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleTypeormModel } from '../infrastructure/models/article.typeorm.model.js';
import { ArticleMapper } from '../infrastructure/mapper/article.mapper.js';
import { SaveArticleUseCase } from '../application/use-cases/article/save-article.use-case.js';
import { DeleteArticleUseCase } from '../application/use-cases/article/delete-article.use-case.js';
import { GetArticleUseCase } from '../application/use-cases/article/get-article.use-case.js';
import { GetByArticleUseCase } from '../application/use-cases/article/getBy-article.use-case.js';

@Module({
  controllers: [ArticleController],
  imports: [TypeOrmModule.forFeature([ArticleTypeormModel])],
  providers: [
    {
      provide: 'IArticleRepository',
      useClass: ArticleTypeormModel,
    },
    ArticleMapper,
    SaveArticleUseCase,
    DeleteArticleUseCase,
    GetArticleUseCase,
    GetByArticleUseCase,
  ],
})
export class ArticleModule {}
