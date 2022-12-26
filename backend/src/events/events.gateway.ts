import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
} from "@nestjs/websockets";
import { Server } from "socket.io";
import { Logger } from "@nestjs/common";

@WebSocketGateway(80, {
  transports: ["websocket"],
  namespace: "allServer",
})
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor() {}

  @WebSocketServer() server: Server;
  private logger: Logger = new Logger("AppGateway");

  @SubscribeMessage("events")
  handleEvent(@MessageBody() data: string): string {
    return data;
  }

  @SubscribeMessage("test")
  testEvent(@MessageBody() data: string): string {
    console.log(data);
    return data;
  }

  afterInit(server: Server) {
    this.logger.log("Init");
    console.log(server);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Client Disconnected : ${client.id}`);
  }

  handleConnection(client: any, ...args: any[]) {
    this.logger.log(`Client Connected : ${client.id}`);
  }
}
