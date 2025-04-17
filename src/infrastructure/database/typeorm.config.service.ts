import { Injectable } from '@nestjs/common';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeOrmConfigService {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const configService = new ConfigService();
    return {
      type: 'postgres',
      host: configService.get<string>('TYPEORM_HOST'),
      port: configService.get<number>('TYPEORM_PORT'),
      username: configService.get<string>('TYPEORM_USERNAME'),
      password: configService.get<string>('TYPEORM_PASSWORD'),
      database: configService.get<string>('TYPEORM_DATABASE'),
      synchronize: true,
      autoLoadEntities: true,
      entities: [__dirname + '../models/*.typeorm.model.js'],
    };
  }
}
