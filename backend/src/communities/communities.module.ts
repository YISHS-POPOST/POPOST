import { Module } from '@nestjs/common';
import { CommunitiesService } from './communities.service';
import { CommunitiesController } from './communities.controller';
import { Community } from './entities/community.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { CommunityApply } from 'src/community_applies/entities/community_apply.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Community, User, CommunityApply])],
  controllers: [CommunitiesController],
  providers: [CommunitiesService],
  exports: [TypeOrmModule],
})

export class CommunitiesModule {}