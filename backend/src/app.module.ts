import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { User } from "./users/entities/user.entity";
import { Community } from "./communities/entities/community.entity";
import { Follow } from "./follows/entities/follow.entity";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import CatchException from "asset/CatchException";
import { APP_FILTER } from "@nestjs/core";
import { CommunitiesModule } from './communities/communities.module';
import { FilesModule } from './files/files.module';
import { FollowsModule } from './follows/follows.module';
import { CommunityAppliesModule } from './community_applies/community_applies.module';
import { CommunityApply } from "./community_applies/entities/community_apply.entity";
import { EventsModule } from './events/events.module';
import { MessagesModule } from './messages/messages.module';
import { MessageRoomsModule } from './message_rooms/message_rooms.module';
import { MessageRoom } from "./message_rooms/entities/message_room.entity";
import { NotesModule } from './notes/notes.module';
import { Note } from "./notes/entities/note.entity";
import { Message } from "./messages/entities/message.entity";
import { CommunityLikesModule } from './community_likes/community_likes.module';
import { CommunityLike } from "./community_likes/entities/community_like.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "1234",
      database: "popost",
      entities: [
        User,
        Community,
        Follow,
        CommunityApply,
        MessageRoom,
        Note,
        Message,
        CommunityLike,
      ],
      synchronize: false,
      timezone: "Z",
    }),
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    UsersModule,
    CommunitiesModule,
    FollowsModule,
    FilesModule,
    CommunityAppliesModule,
    EventsModule,
    MessagesModule,
    MessageRoomsModule,
    NotesModule,
    CommunityLikesModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_FILTER, useClass: CatchException }],
})
export class AppModule {}