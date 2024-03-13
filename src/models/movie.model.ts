import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  time: string;

  @Column()
  image: string;

  @Column()
  status: boolean;
}
