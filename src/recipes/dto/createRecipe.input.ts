import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType() // このクラスがGraphQLの入力タイプとして使用されることを示す
export class CreateRecipeInput {
  @Field() // このプロパティがGraphQLのスキーマでフィールドとして公開されることを示す
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field(() => Int)
  serving: number;

  @Field({ nullable: true })
  @IsString()
  description?: string;
}
