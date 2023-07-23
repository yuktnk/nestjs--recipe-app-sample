import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { createWriteStream } from 'fs';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';

@Resolver()
export class ImagesResolver {
  @Query()
  async getImages() {
    const message = '画像を返すよ';
    return message;
  }

  @Mutation(() => String)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename },
  ): Promise<string> {
    // アップロードされたファイルを保存するロジックを実装
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./uploads/${filename}`))
        .on('finish', () => resolve('ファイルが正常にアップロードされました。'))
        .on('error', () => reject('ファイルのアップロードに失敗しました。')),
    );
  }
}
