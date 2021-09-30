import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenAgoraController } from './token-agora/token-agora.controller';
import { TokenAgoraService } from './token-agora/token-agora.service';

@Module({
  imports: [],
  controllers: [AppController, TokenAgoraController],
  providers: [AppService, TokenAgoraService],
})
export class AppModule {}
