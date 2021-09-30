import { Test, TestingModule } from '@nestjs/testing';
import { TokenAgoraController } from './token-agora.controller';

describe('TokenAgoraController', () => {
  let controller: TokenAgoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenAgoraController],
    }).compile();

    controller = module.get<TokenAgoraController>(TokenAgoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
