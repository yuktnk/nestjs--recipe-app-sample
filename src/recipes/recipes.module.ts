import { Module } from '@nestjs/common';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RecipesResolver, RecipesService],
})
export class RecipesModule {}
