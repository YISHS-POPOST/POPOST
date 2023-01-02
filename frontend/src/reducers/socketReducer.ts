import { SET_SOCKET, BREAK_SOCKET } from "../actionTypes";
import { SocketType } from "../type/socket";

const initalState: SocketType | null = null;

export default function (state = initalState, action: any) {
  switch (action.type) {
    case SET_SOCKET:
      return {
        ...action.payload,
      };
    case BREAK_SOCKET:
      return null;
    default:
      return state;
  }
}
