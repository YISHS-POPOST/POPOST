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
  namespace: "messenger",
})
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor() {}

  @WebSocketServer() server: Server;
  private logger: Logger = new Logger("AppGateway");

  @SubscribeMessage("test")
  testEvent(@MessageBody() data: string): string {
    this.server.emit("test", { msg: "testServer" });
    return data;
  }

  // 서버 초기화중 작동
  afterInit(server: Server) {
  }

  // 유저와 서버의 연결이 끊겼을때
  handleDisconnect(client: any) {
    console.log('disconnect');
  }

  // socket io 커넥트 완료되었을때
  handleConnection(client: any, ...args: any[]) {
  }
}
