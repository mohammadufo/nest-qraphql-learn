import { InputType } from '@nestjs/graphql';

@InputType({ description: 'Create coffee input object type.' })
export class CreateCoffeeInput {
  name: string;
  brand: string;
  flavors: string[];
}
