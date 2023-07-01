import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

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
  status: Status;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
