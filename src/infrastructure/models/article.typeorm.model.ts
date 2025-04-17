import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity } from '../../core/entity/article.entity.js';

@Entity('article')
export class ArticleTypeormModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 255 })
  header: string;
  @Column({ type: 'text' })
  description: string;
  @Column('array', { array: true })
  tags: string[];
  @Column({ type: 'varchar', length: 255 })
  typeArticle: 'public' | 'internal';
}
