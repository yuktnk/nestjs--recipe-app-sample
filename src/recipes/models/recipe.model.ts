import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => Int)
  serving: number; // ◯人前

  @Field()
  status: 'PUBLISHED' | 'PRIVATE' | 'DRAFT';
}
