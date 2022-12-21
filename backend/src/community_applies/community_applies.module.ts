import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunityAppliesService } from './community_applies.service';
import { CommunityAppliesController } from './community_applies.controller';
import { CommunityApply } from './entities/community_apply.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommunityApply])],
  controllers: [CommunityAppliesController],
  providers: [CommunityAppliesService]
})
export class CommunityAppliesModule {}
