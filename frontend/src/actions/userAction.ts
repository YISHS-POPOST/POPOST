import { GET_LOGIN, LOGIN_ERROR, LOGOUT } from "../actionTypes";
import { AppDispatch } from "../stores";
import { Users } from "../type/users";

export const loginUser = (user: Users) => async (dispatch: AppDispatch) => {
  dispatch({
    type: GET_LOGIN,
    payload: { ...user },
  });
};

export const erorrLogin = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: LOGIN_ERROR,
    payload: {},
  });
};

export const userLogout = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: LOGOUT,
    payload: {},
  });
};