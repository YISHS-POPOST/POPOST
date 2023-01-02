import { Test, TestingModule } from '@nestjs/testing';
import { MessageRoomsService } from './message_rooms.service';

describe('MessageRoomsService', () => {
  let service: MessageRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageRoomsService],
    }).compile();

    service = module.get<MessageRoomsService>(MessageRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
