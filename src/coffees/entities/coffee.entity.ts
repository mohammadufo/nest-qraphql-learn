import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'coffees model' })
export class Coffee {
  @Field(() => ID, { description: 'unique identifier' })
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}
