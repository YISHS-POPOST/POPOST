import { LoginUser, DataSetInterface } from "../../types/User";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "@env";
import { AppDispatch } from "../../src/stores";
import { loginUser, erorrLogin } from "../../src/actions/userAction";
import { StateInterface } from "../../src/type/state";

export const loginAction = async (
  dispatch: any,
  data: LoginUser,
  callBack?: void | Promise<void>
) => {
  await axios
    .post(API_URL + "/users/login", data)
    .then(async res => {
      const { status } = res;
      if (status === 200) {
        dispatch(loginUser(res.data.users));
        await callBack;
      }
    })
    .catch(err => {
      const message: string = err.response.data.message;
      Alert.alert("실패", message);
      dispatch(erorrLogin());
    });
};
