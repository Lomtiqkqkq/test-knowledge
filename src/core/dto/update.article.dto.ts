export class UpdateArticleDto {
  header?: string;
  description?: string;
  tags?: string[];
  typeArticle?: 'public' | 'internal';
}
