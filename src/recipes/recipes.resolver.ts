import { Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Recipe } from './models/recipe.model';

@Resolver()
export class RecipesResolver {
  constructor(private readonly recipeService: RecipesService) {}

  @Query(() => [Recipe], { nullable: 'items' })
  getRecipes(): Recipe[] {
    return this.recipeService.getRecipes();
  }
}
