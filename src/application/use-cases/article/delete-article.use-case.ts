import { Inject, Injectable } from '@nestjs/common';
import { IArticleRepository } from '../../../core/repositories/article.repository.js';

@Injectable()
export class DeleteArticleUseCase {
  constructor(
    @Inject('IArticleRepository')
    private readonly articleRepository: IArticleRepository,
  ) {}
  async execute(id: string) {
    const article = await this.articleRepository.getBy('id', id);
    if (!article) {
      throw new Error('Article not found');
    }
    await this.articleRepository.delete(id);
    return { message: 'Article deleted successfully' };
  }
}
