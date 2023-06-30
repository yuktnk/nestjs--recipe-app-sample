import { Injectable } from '@nestjs/common';
import { Recipe } from './models/recipe.model';
import { CreateRecipeDto } from './dto/createRecipe.dto';

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [];

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  createRecipe(createRecipeDto: CreateRecipeDto): Recipe {
    const { name, serving, description } = createRecipeDto;
    const newRecipe = new Recipe();
    newRecipe.id = this.recipes.length + 1;
    newRecipe.name = name;
    newRecipe.serving = serving;
    newRecipe.status = 'PUBLISHED';
    newRecipe.description = description;

    this.recipes.push(newRecipe);

    return newRecipe;
  }
}
