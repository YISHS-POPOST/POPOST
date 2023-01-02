import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from "@nestjs/common";
import { MessageRoomsService } from "./message_rooms.service";
import { CreateMessageRoomDto } from "./dto/create-message_room.dto";
import { UpdateMessageRoomDto } from "./dto/update-message_room.dto";
import HttpError from "asset/HttpError";

@Controller("message-rooms")
export class MessageRoomsController {
  constructor(private readonly messageRoomsService: MessageRoomsService) {}

  @Post()
  async create(
    @Body() createMessageRoomDto: CreateMessageRoomDto,
    @Res() res: any
  ) {
    const checkMessageRoom = await this.messageRoomsService.findOne([
      createMessageRoomDto.createUserId,
      createMessageRoomDto.inviteUserId,
    ]);

    if (checkMessageRoom)
      throw new HttpError(401, "중복된 방으로 대화를 생성하지 않습니다.");

    const createMessageRoom = await this.messageRoomsService
      .create(createMessageRoomDto)
      .catch(err => {
        return false;
      });

    if (!createMessageRoom) throw new HttpError(500, "서버 오류입니다.");
    return res.status(200).send({ message: "방을 성공적으로 생성했습니다." });
  }

  @Get()
  findAll() {
    return this.messageRoomsService.findAll();
  }

  // 채팅방 1개 여부 확인
  @Post("/room")
  async findOne(@Body() users: [string, string], @Res() res: any) {
    const findRoom = await this.messageRoomsService.findOne(users);
    return res
      .status(200)
      .send({ message: "방을 정상적으로 찾았습니다.", room: findRoom });
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateMessageRoomDto: UpdateMessageRoomDto
  ) {
    return this.messageRoomsService.update(+id, updateMessageRoomDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.messageRoomsService.remove(+id);
  }
}
