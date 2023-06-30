import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Recipe } from './models/recipe.model';
import { CreateRecipeDto } from './dto/createRecipe.dto';

@Resolver()
export class RecipesResolver {
  constructor(private readonly recipeService: RecipesService) {}

  @Query(() => [Recipe], { nullable: 'items' })
  getRecipes(): Recipe[] {
    return this.recipeService.getRecipes();
  }

  @Mutation(() => Recipe)
  createRecipe(
    @Args('createRecipeDto') createRecipeDto: CreateRecipeDto,
  ): Recipe {
    return this.recipeService.createRecipe(createRecipeDto);
  }
}
