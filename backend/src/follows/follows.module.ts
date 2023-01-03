import { Module } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { FollowsController } from './follows.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Follow } from './entities/follow.entity';
import { MessageRoom } from 'src/message_rooms/entities/message_room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Follow  , MessageRoom])],
  controllers: [FollowsController],
  providers: [FollowsService]
})

export class FollowsModule {}