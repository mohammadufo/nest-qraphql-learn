import { Query, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity';

@Resolver()
export class CoffeesResolver {
  @Query(() => [Coffee], { name: 'coffees' })
  async findAll() {
    return [];
  }
}
