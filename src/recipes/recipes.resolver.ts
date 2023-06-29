import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Recipe } from './models/recipe.model';
import { CreateRecipeInput } from './dto/createRecipe.input';

@Resolver()
export class RecipesResolver {
  constructor(private readonly recipeService: RecipesService) {}

  @Query(() => [Recipe], { nullable: 'items' })
  getRecipes(): Recipe[] {
    return this.recipeService.getRecipes();
  }

  @Mutation(() => Recipe)
  createRecipe(
    @Args('createRecipeInput') createRecipeInput: CreateRecipeInput,
  ): Recipe {
    return this.recipeService.createRecipe(createRecipeInput);
  }
}
