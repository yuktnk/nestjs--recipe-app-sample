import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Recipe } from './models/recipe.model';
import { Int } from '@nestjs/graphql';

@Resolver()
export class RecipesResolver {
  constructor(private readonly recipeService: RecipesService) {}

  @Query(() => [Recipe], { nullable: 'items' })
  getRecipes(): Recipe[] {
    return this.recipeService.getRecipes();
  }

  @Mutation(() => Recipe)
  createRecipe(
    @Args('name') name: string,
    @Args('serving', { type: () => Int }) serving: number,
    @Args('description', { nullable: true }) description: string,
  ): Recipe {
    return this.recipeService.createRecipe(name, serving, description);
  }
}
