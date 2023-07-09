import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/createRecipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Recipe } from '@prisma/client';
import { UpdateRecipeDto } from './dto/updateRecipe.dto';

@Injectable()
export class RecipesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getRecipes(): Promise<Recipe[]> {
    return await this.prismaService.recipe.findMany();
  }

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const { name, serving, description } = createRecipeDto;

    return await this.prismaService.recipe.create({
      data: {
        name,
        serving,
        description,
      },
    });
  }

  async updateRecipe(updateRecipeDto: UpdateRecipeDto): Promise<Recipe> {
    const { id, name, serving, status, description } = updateRecipeDto;

    return await this.prismaService.recipe.update({
      data: {
        name,
        serving,
        status,
        description,
      },
      where: { id },
    });
  }

  async deleteRecipe(id: number): Promise<Recipe> {
    return await this.prismaService.recipe.delete({
      where: { id },
    });
  }
}
