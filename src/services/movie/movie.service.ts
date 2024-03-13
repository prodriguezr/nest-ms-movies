import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movies } from 'src/models';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movies)
    private readonly movieRepository: Repository<Movies>,
  ) {}

  async findAll(): Promise<Movies[]> {
    return await this.movieRepository.findBy({ status: true });
  }

  async findById(id: number): Promise<Movies> {
    return await this.movieRepository.findOneBy({ id, status: true });
  }

  async create(movie: Movies): Promise<Movies> {
    return await this.movieRepository.save(movie);
  }

  async update(movie: Movies): Promise<Movies> {
    return await this.movieRepository.save(movie);
  }

  async delete(id: number): Promise<boolean> {
    await this.movieRepository.delete({ id });

    return true;
  }
}
