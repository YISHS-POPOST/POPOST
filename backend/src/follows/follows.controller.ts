import {
  Controller,
  Post,
  Body,
  Res,
} from "@nestjs/common";
import { FollowsService } from "./follows.service";
import HttpError from "asset/HttpError";


interface FollowBody {
  userId: string;
  tab: "follow" | "message";
}

@Controller("follows")
export class FollowsController {
  constructor(private readonly followsService: FollowsService) {}

  // 유저가 팔로우를 할 때
  @Post("/follow")
  async follow(@Body() body: any, @Res() res: any) {
    const { follow_id, follower_id } = body;

    if (!follow_id || !follower_id) return false;

    if (follow_id === follower_id)
      throw new HttpError(404, "나 자신은 내 인생에 영원한 팔로워입니다.");

    const followCheck = await this.followsService.followCheck(body);

    switch (followCheck) {
      case false:
        return res
          .status(201)
          .send({ message: "팔로우 취소되었습니다.", type: "cancel" });
        break;
      case true:
        await this.followsService.create(body);
        return res
          .status(201)
          .send({ message: "팔로우 하셨습니다.", type: "success" });
        break;
    }
  }

  // 내가 팔로우한 사람을 볼때
  @Post("/follow/get")
  async getFollow(@Body() body: FollowBody, @Res() res: any) {
    const { tab } = body;
    const followerId = await this.followsService.followGet(body.userId , tab);
    return res
      .status(201)
      .send({ message: "성공적으로 조회되었습니다", data: followerId });
  }
}
