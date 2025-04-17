import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './infrastructure/database/typeorm.config.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './modules/article.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development.local', '.env.development'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ArticleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
