import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GetArticleUseCase } from '../../application/use-cases/article/get-article.use-case.js';
import { GetByArticleUseCase } from '../../application/use-cases/article/getBy-article.use-case.js';
import { SaveArticleUseCase } from '../../application/use-cases/article/save-article.use-case.js';
import { DeleteArticleUseCase } from '../../application/use-cases/article/delete-article.use-case.js';
import { ArticleEntity } from '../../core/entity/article.entity.js';

@Controller('article')
export class ArticleController {
  constructor(
    private readonly getArticleUseCase: GetArticleUseCase,
    private readonly getByArticleUseCase: GetByArticleUseCase,
    private readonly saveArticleUseCase: SaveArticleUseCase,
    private readonly deleteArticleUseCase: DeleteArticleUseCase,
  ) {}
  @Get('')
  async getArticle() {
    return await this.getArticleUseCase.execute();
  }
  @Get(':field/:value')
  async getByArticle(
    @Param('field') field: keyof ArticleEntity,
    @Param('value') rawValue: string,
  ) {
    let value: any;
    value = rawValue;
    return await this.getByArticleUseCase.execute(
      field,
      value as ArticleEntity[typeof field],
    );
  }
  @Post('save')
  async saveArticle() {
    return await this.saveArticleUseCase.execute();
  }
  @Delete(':id')
  async deleteArticle(@Param('id') id: string) {
    return await this.deleteArticleUseCase.execute(id);
  }
}
