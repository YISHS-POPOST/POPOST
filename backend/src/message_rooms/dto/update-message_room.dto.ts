import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageRoomDto } from './create-message_room.dto';

export class UpdateMessageRoomDto extends PartialType(CreateMessageRoomDto) {}
