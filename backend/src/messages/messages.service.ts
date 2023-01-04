import { Injectable } from "@nestjs/common";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Message } from "./entities/message.entity";
import { Repository } from "typeorm";

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly MessageRepository: Repository<Message>
  ) {}

  create(createMessageDto: CreateMessageDto) {
    const saveMessageObj = new Message();
    saveMessageObj.content = createMessageDto.content;
    saveMessageObj.room_id = createMessageDto.roomId;
    saveMessageObj.user_id = createMessageDto.userId;
    saveMessageObj.check = false;
    this.MessageRepository.save(saveMessageObj);
  }

  findAll() {
    return `This action returns all messages`;
  }

  async findMessages(id: number) {
    const findItems = await this.MessageRepository.find({
      where: {
        room_id: id,
      },
    });
    return findItems;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
