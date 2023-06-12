import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [];

  getRecipes(): Recipe[] {
    const recipe01 = new Recipe();
    recipe01.id = 1;
    recipe01.name = '焼きうどん';
    recipe01.serving = 2;
    recipe01.status = 'PUBLISHED';
    recipe01.discription = '説明文です説明文です説明文です説明文です説明文です';

    this.recipes.push(recipe01);

    return this.recipes;
  }
}
