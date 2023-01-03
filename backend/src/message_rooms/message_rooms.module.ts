import { Module } from '@nestjs/common';
import { MessageRoomsService } from './message_rooms.service';
import { MessageRoomsController } from './message_rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageRoom } from './entities/message_room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MessageRoom])],
  controllers: [MessageRoomsController],
  providers: [MessageRoomsService],
  exports: [TypeOrmModule],
})
export class MessageRoomsModule {}
