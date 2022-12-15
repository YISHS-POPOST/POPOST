import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "1234",
      database: "popost",
      entities: [User],
      synchronize: false,
    }),
    UsersModule,
    ConfigModule.forRoot({
      envFilePath : '.env',
      isGlobal : true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
