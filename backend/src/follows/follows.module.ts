import { Module } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { FollowsController } from './follows.controller';

@Module({
  controllers: [FollowsController],
  providers: [FollowsService]
})
export class FollowsModule {}
