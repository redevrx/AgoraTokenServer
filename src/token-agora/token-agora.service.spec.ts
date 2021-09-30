import { Test, TestingModule } from '@nestjs/testing';
import { TokenAgoraService } from './token-agora.service';

describe('TokenAgoraService', () => {
  let service: TokenAgoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenAgoraService],
    }).compile();

    service = module.get<TokenAgoraService>(TokenAgoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
