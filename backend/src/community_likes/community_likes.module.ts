import { Module } from '@nestjs/common';
import { CommunityLikesService } from './community_likes.service';
import { CommunityLikesController } from './community_likes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunityLike } from './entities/community_like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommunityLike])],
  controllers: [CommunityLikesController],
  providers: [CommunityLikesService],
  exports: [TypeOrmModule],
})
export class CommunityLikesModule {}
