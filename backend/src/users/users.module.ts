import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { User } from "./entities/user.entity";
import { Community } from "src/communities/entities/community.entity";
import { Follow } from "src/follows/entities/follow.entity";
import { CommunityApply } from "src/community_applies/entities/community_apply.entity";
import { Note } from "src/notes/entities/note.entity";
import { CommunityLike } from "src/community_likes/entities/community_like.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Community,
      Follow,
      CommunityApply,
      Note,
      CommunityLike,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
