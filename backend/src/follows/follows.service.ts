import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateFollowDto } from "./dto/create-follow.dto";
import { Follow } from "./entities/follow.entity";
import { MessageRoom } from "src/message_rooms/entities/message_room.entity";

@Injectable()
export class FollowsService {
  constructor(
    @InjectRepository(Follow)
    private readonly FollowRepository: Repository<Follow>,
    
    @InjectRepository(MessageRoom)
    private readonly MessageRooomRepository: Repository<MessageRoom>
  ) {}

  async create(followData: CreateFollowDto) {
    const { follow_id, follower_id } = followData;

    const follow = new Follow();
    follow.follow_id = follow_id;
    follow.follower_id = follower_id;

    return await this.FollowRepository.save(follow);
  }

  async followCheck(followData: Follow) {
    const { follow_id, follower_id } = followData;
    const check = await this.FollowRepository.findOneBy({
      follow_id,
      follower_id,
    });

    if (check) {
      await this.FollowRepository.delete(check.id);
      return false;
    } else {
      return true;
    }
  }

  async followGet(id: string) {
    // const followId = await this.FollowRepository.find({
    //   relations: ["user"],
    //   where: {
    //     follower_id: id,
    //   },
    // })
    const followId = await this.MessageRooomRepository.find({
      relations: ["user"],
    });
    return followId;
  }
}
