import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Recipe as RecipeModel } from './models/recipe.model';
import { CreateRecipeDto } from './dto/createRecipe.dto';
import { Recipe } from '@prisma/client';
import { UpdateRecipeDto } from './dto/updateRecipe.dto';

@Resolver()
export class RecipesResolver {
  constructor(private readonly recipeService: RecipesService) {}

  @Query(() => [RecipeModel], { nullable: 'items' })
  async getRecipes(): Promise<Recipe[]> {
    return await this.recipeService.getRecipes();
  }

  @Mutation(() => RecipeModel)
  async createRecipe(
    @Args('createRecipeDto') createRecipeDto: CreateRecipeDto,
  ): Promise<Recipe> {
    return await this.recipeService.createRecipe(createRecipeDto);
  }

  @Mutation(() => RecipeModel)
  async updateRecipe(
    @Args('updateRecipeDto') updateRecipeDto: UpdateRecipeDto,
  ): Promise<Recipe> {
    return await this.recipeService.updateRecipe(updateRecipeDto);
  }
}
