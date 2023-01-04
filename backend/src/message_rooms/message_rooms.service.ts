import { Injectable } from "@nestjs/common";
import { CreateMessageRoomDto } from "./dto/create-message_room.dto";
import { UpdateMessageRoomDto } from "./dto/update-message_room.dto";
import { MessageRoom } from "./entities/message_room.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class MessageRoomsService {
  constructor(
    @InjectRepository(MessageRoom)
    private readonly MessageRoomRepository: Repository<MessageRoom>
  ) {}

  async create(createMessageRoomDto: CreateMessageRoomDto) {
    const { createUserId, inviteUserId } = createMessageRoomDto;
    if (!createUserId || !inviteUserId) return false;

    const messageRoom = new MessageRoom();
    messageRoom.create_user = createUserId;
    messageRoom.invite_user = inviteUserId;
    
    return await this.MessageRoomRepository.save(messageRoom);
  }

  findAll() {
    return `This action returns all messageRooms`;
  }

  async findOne(users: [string, string]) {
    return await this.MessageRoomRepository.createQueryBuilder()
      .where(
        "create_user = :user1 AND invite_user = :user2 OR create_user = :user2 AND invite_user = :user1",
        {
          user1: users[0],
          user2: users[1],
        }
      )
      .getOne();
  }

  update(id: number, updateMessageRoomDto: UpdateMessageRoomDto) {
    return `This action updates a #${id} messageRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} messageRoom`;
  }
}
