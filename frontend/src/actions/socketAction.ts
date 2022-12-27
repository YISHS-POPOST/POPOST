import { SET_SOCKET, BREAK_SOCKET } from "../actionTypes";
import { AppDispatch } from "../stores";
import { SocketType } from "../type/socket";

export const setSocket =
  (community: SocketType) => async (dispatch: AppDispatch) => {
    dispatch({
      type: SET_SOCKET,
      payload: { ...community },
    });
  };

export const breakSocket = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: BREAK_SOCKET,
    payload: null,
  });
};
