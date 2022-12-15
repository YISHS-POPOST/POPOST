import { GET_LOGIN, LOGIN_ERROR, LOGOUT } from "../types";
import axios from "axios";

export const getUsers = () => async dispatch => {
  dispatch({
    type: GET_LOGIN,
    payload: {id : 'dnckd9425' , pw : '1234'},
  });
  // try {
  //   await axios.post("/api/user/login/check").then(res => {

  //   });
  // } catch (error) {
  //   dispatch({
  //     type: LOGIN_ERROR,
  //     payload: error,
  //   });
  // }
};

export const userLogout = () => async dispatch => {
  axios.post("/api/user/logout").then(res => {
    dispatch({
      type: LOGOUT,
      payload: {},
    });
  });
};
