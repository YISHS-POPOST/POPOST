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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "1234",
      database: "popost",
      entities: [User, Community, Follow, CommunityApply],
      synchronize: false,
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
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_FILTER, useClass: CatchException }],
})
export class AppModule {}