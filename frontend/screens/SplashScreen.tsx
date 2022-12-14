import React, { useEffect, useCallback } from "react";
import { View, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProfileScreenNavigationProp } from "../types/NavigateType";
import StartLoading from "../components/loading/StartLoading";
import { API_URL } from "@env";
import axios from "axios";
import { LoginUser } from "../types/User";
import { DataSetInterface } from "../types/User";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../src/stores";
import { loginUser, erorrLogin } from "../src/actions/userAction";
import { io } from "socket.io-client";
import { setSocket } from "../src/actions/socketAction";
import { StateInterface } from "../src/type/state";
import { useFocusEffect } from "@react-navigation/native";

const SplashScreen = ({ navigation }: ProfileScreenNavigationProp) => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: StateInterface) => state.users);

  const loginAction = async (data: LoginUser) => {
    await axios
      .post(API_URL + "/users/login", data)
      .then(async res => {
        const { status } = res;
        if (status === 200) {
          await loginSuccess(res.data);
        }
      })
      .catch(err => {
        const message: string = err.response.data.message;
        Alert.alert("실패", message);
        dispatch(erorrLogin());
      });
  };

  const loginSuccess = async (data: DataSetInterface) => {
    const socket = await io("ws://10.0.2.2/messenger", {
      transports: ["websocket"],
      port: 80,
    });
    dispatch(loginUser(data.users));
    dispatch(setSocket(socket));
    return navigation.replace("Main");
  };

  const connectCheck = async () => {
    setTimeout(async () => {
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      const userId = await AsyncStorage.getItem("user_id").then(value => value);
      const userPassword = await AsyncStorage.getItem("user_password").then(
        value => value
      );
      if (!userId || !userPassword) return await navigation.navigate("Auth");
      await loginAction({ id: userId, password: userPassword });
    }, 1000);
  };

  //State for ActivityIndicator animation
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      connectCheck();
    }, [])
  );

  return (
    <View style={styles.container}>
      <StartLoading />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
