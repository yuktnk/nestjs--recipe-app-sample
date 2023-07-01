import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Recipe as TaskModel } from './models/recipe.model';
import { CreateRecipeDto } from './dto/createRecipe.dto';
import { Recipe } from '@prisma/client';

@Resolver()
export class RecipesResolver {
  constructor(private readonly recipeService: RecipesService) {}

  @Query(() => [TaskModel], { nullable: 'items' })
  async getRecipes(): Promise<Recipe[]> {
    return await this.recipeService.getRecipes();
  }

  @Mutation(() => TaskModel)
  async createRecipe(
    @Args('createRecipeDto') createRecipeDto: CreateRecipeDto,
  ): Promise<Recipe> {
    return await this.recipeService.createRecipe(createRecipeDto);
  }
}
