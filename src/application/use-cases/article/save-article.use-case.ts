import { Inject, Injectable } from '@nestjs/common';
import { IArticleRepository } from '../../../core/repositories/article.repository.js';

@Injectable()
export class SaveArticleUseCase {
  constructor(
    @Inject('IArticleRepository')
    private readonly articleRepository: IArticleRepository,
  ) {}
  async execute() {}
}
