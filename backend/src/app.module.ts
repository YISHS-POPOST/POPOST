import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { User } from "./users/entities/user.entity";
import { Community } from './communities/entities/community.entity'
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import CatchException from "asset/CatchException";
import { APP_FILTER } from "@nestjs/core";
import { CommunitiesModule } from './communities/communities.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "1234",
      database: "popost",
      entities: [User, Community],
      synchronize: false,
    }),
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    UsersModule,
    CommunitiesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    { provide: APP_FILTER, useClass: CatchException }
  ],
})
export class AppModule {}
