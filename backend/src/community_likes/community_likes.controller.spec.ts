import { Test, TestingModule } from '@nestjs/testing';
import { CommunityLikesController } from './community_likes.controller';
import { CommunityLikesService } from './community_likes.service';

describe('CommunityLikesController', () => {
  let controller: CommunityLikesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommunityLikesController],
      providers: [CommunityLikesService],
    }).compile();

    controller = module.get<CommunityLikesController>(CommunityLikesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
