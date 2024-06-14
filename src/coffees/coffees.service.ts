import { CreateCoffeeInput } from './dto/create-coffee.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {
  async findAll() {
    return [];
  }

  async findOne(id: number) {
    return null;
  }

  async create(createCoffeeInput: CreateCoffeeInput) {
    return null;
  }
}
