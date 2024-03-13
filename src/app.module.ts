import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmService } from './services/typeorm/typeorm.service';
import { MovieService } from './services/movie/movie.service';
import { Movies } from './models/index';
import { MovieController } from './controllers';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmService }),
    TypeOrmModule.forFeature([Movies]),
  ],
  controllers: [AppController, MovieController],
  providers: [AppService, TypeOrmService, MovieService],
})
export class AppModule {}
