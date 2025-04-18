import { Inject, Injectable } from '@nestjs/common';
import { IArticleRepository } from '../../../core/repositories/article.repository.js';

@Injectable()
export class GetArticleUseCase {
  constructor(
    @Inject('IArticleRepository')
    private readonly articleRepository: IArticleRepository,
  ) {}
  async execute(tags?: string[]) {
    return !tags?.length
      ? this.articleRepository.get()
      : this.articleRepository.get(tags);
  }
}
