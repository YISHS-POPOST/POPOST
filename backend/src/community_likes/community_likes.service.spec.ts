import { Test, TestingModule } from '@nestjs/testing';
import { CommunityLikesService } from './community_likes.service';

describe('CommunityLikesService', () => {
  let service: CommunityLikesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommunityLikesService],
    }).compile();

    service = module.get<CommunityLikesService>(CommunityLikesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
