import { Test, TestingModule } from '@nestjs/testing';
import { MessageRoomsController } from './message_rooms.controller';
import { MessageRoomsService } from './message_rooms.service';

describe('MessageRoomsController', () => {
  let controller: MessageRoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageRoomsController],
      providers: [MessageRoomsService],
    }).compile();

    controller = module.get<MessageRoomsController>(MessageRoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
