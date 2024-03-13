import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Movies } from 'src/models';
import { MovieService } from 'src/services';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async get() {
    try {
      const response = await this.movieService.findAll();
      return {
        success: true,
        data: response,
      };
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async save(@Body() movie: Movies) {
    return this.movieService
      .create(movie)
      .then((response) => {
        return {
          success: true,
          data: response,
        };
      })
      .catch((err) => {
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Put()
  async update(@Body() movie: Movies) {
    return this.movieService
      .update(movie)
      .then((response) => {
        return {
          success: true,
          data: response,
        };
      })
      .catch((err) => {
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.movieService
      .delete(+id)
      .then((response) => {
        return {
          success: true,
          data: response,
        };
      })
      .catch((err) => {
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
}
