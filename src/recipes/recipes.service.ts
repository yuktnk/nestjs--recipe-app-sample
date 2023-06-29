import { Injectable } from '@nestjs/common';
import { Recipe } from './models/recipe.model';
import { CreateRecipeInput } from './dto/createRecipe.input';

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [];

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  createRecipe(createRecipeInput: CreateRecipeInput): Recipe {
    const { name, serving, description } = createRecipeInput;
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
