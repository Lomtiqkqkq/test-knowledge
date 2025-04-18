import { UpdateArticleDto } from '../dto/update.article.dto.js';

export class ArticleEntity {
  constructor(
    public readonly id: string,
    public header: string,
    public description: string,
    public tags: string[],
    public typeArticle: 'public' | 'internal',
  ) {}
  getId() {
    return this.id;
  }
  getHeader() {
    return this.header;
  }
  getDescription() {
    return this.description;
  }
  getTags() {
    return this.tags;
  }
  getTypeArticle() {
    return this.typeArticle;
  }
  updateAllParams(updateDto: UpdateArticleDto) {
    this.header = updateDto.header ?? this.header;
    this.description = updateDto.description ?? this.description;
    this.tags = updateDto.tags ?? this.tags;
    this.typeArticle = updateDto.typeArticle ?? this.typeArticle;
    return this;
  }
}
