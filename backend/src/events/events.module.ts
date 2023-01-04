import { Module } from "@nestjs/common";
import { EventsGateway } from "./events.gateway";
import { MessagesService } from "src/messages/messages.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "src/messages/entities/message.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [EventsGateway, MessagesService],
})

export class EventsModule {}
