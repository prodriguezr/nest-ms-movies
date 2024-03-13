import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mssql',
      host: 'localhost',
      username: 'usr_app',
      password: '#usr_app.1#',
      port: 3314,
      database: 'movies',
      entities: ['dist/**/*.model.{ts,js}'],
      options: { trustServerCertificate: true },
    };
  }
}
