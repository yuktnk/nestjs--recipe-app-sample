import { Module } from '@nestjs/common';
import { ImagesResolver } from './images.resolver';
import { ImagesService } from './images.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ImagesResolver, ImagesService],
})
export class ImagesModule {}
