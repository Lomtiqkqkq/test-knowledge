export class ArticleEntity {
  constructor(
    private readonly header: string,
    private readonly description: string,
    private readonly tags: string[],
    private readonly typeArticle: 'public' | 'internal',
  ) {}
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
}
