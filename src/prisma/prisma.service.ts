import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // PrismaServiceインスタンスが初期化された直後に呼び出されるメソッド
  async onModuleInit() {
    await this.$connect();
  }

  // NestJSアプリケーションが終了する前に
  // 実行する必要がある後処理の処理を設定するためのメソッド
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close(); // アプリケーションを閉じる処理
    });
  }
}
