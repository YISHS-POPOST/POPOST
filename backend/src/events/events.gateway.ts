import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
  ConnectedSocket,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { Logger } from "@nestjs/common";

interface MessagePayload {
  userId: string;
  content: string;
  roomId: number;
}

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

  // 테스트 코드
  @SubscribeMessage("test")
  testEvent(@MessageBody() data: string): string {
    this.server.emit("test", { msg: "testServer" });
    return data;
  }

  @SubscribeMessage("join")
  joinEvent(@MessageBody() data: number, @ConnectedSocket() client: Socket) {
    client.join(`${data}`);
  }

  @SubscribeMessage("exit")
  exitEvent(@ConnectedSocket() client: Socket) {
    const rooms = [...client.rooms];
    rooms.shift();
    rooms.forEach(room => {
      client.leave(`${room}`);
    });
    return true;
  }

  @SubscribeMessage("message")
  messageEvent(
    @MessageBody() data: MessagePayload,
    @ConnectedSocket() client: Socket
  ) {
    const { userId, content, roomId } = data;
    this.server.to(`${roomId}`).emit("get message", { userId, content });
  }

  // 서버 초기화중 작동
  afterInit(server: Server) {}

  // 유저와 서버의 연결이 끊겼을때
  handleDisconnect(client: any) {
    const rooms = [...client.rooms];
    rooms.forEach(room => {
      this.server.socketsLeave(room);
    });
    return true;
  }

  // socket io 커넥트 완료되었을때
  handleConnection(client: any, ...args: any[]) {}
}
