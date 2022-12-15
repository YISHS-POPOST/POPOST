import { View, StyleSheet, TextInput, Alert } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../Text";
import PressButton from "../PressButton";
import Feather from "react-native-vector-icons/Feather";
import { useState, useRef, createRef } from "react";
import axios from "axios";
import { UserType } from "../../types/UserInformationType";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

interface LoginUser {
  id: string;
  password: string;
}

const LoginForm = ({ navigation }: ProfileScreenNavigationProp) => {
  const [user, setUser] = useState<LoginUser>({
    id: "",
    password: "",
  });

  const targetInputChange = (key: string, val: string) => {
    setUser(prev => ({
      ...prev,
      [key]: val,
    }));
  };

  const loginAction = async () => {
    await axios
      .post(API_URL + "/users/login", user)
      .then(res => {
        const { status } = res;
        Alert.alert("성공", "로그인이 완료되었습니다.");
        if (status === 200) {
          AsyncStorage.setItem("user_id", res.data.id);
          return navigation.replace("SplashScreen");
        }
      })
      .catch(err => {
        const message : string = err.response.data.message;
        return Alert.alert('오류',message);
      });
  };

  return (
    <View
      style={[
        theme.container,
        styles.container,
        theme.justifyContentCenter,
        theme.alignItemsCenter,
        theme.mb3,
      ]}
    >
      <BoldText
        style={[theme.fontTitleSize, styles.titleText, theme.pt2, theme.pb2]}
      >
        SIGN IN
      </BoldText>
      <View>
        <View style={[styles.inputBorder]}>
          <Feather name="user" size={20} style={theme.ml2} color={"#ccc"} />
          <TextInput
            placeholder="Id"
            style={[styles.input]}
            placeholderTextColor={"#ccc"}
            onChangeText={text => targetInputChange("id", text)}
          />
        </View>
        <View style={[styles.inputBorder, theme.mb1]}>
          <Feather name="lock" size={20} style={theme.ml2} color={"#745858"} />
          <TextInput
            placeholder="Password"
            style={[styles.input]}
            placeholderTextColor={"#ccc"}
            secureTextEntry={true}
            onChangeText={text => targetInputChange("password", text)}
          />
        </View>
        <View style={[styles.forgotPassword, theme.mb3]}>
          <RegularText style={[theme.fontBase]}>
            비밀번호를 잊으셨나요?
          </RegularText>
        </View>
        <View>
          <PressButton
            style={styles.buttonLogin}
            textStyle={styles.buttonLoginText}
            content="로그인"
            onPress={loginAction}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  titleText: {
    color: "#555",
  },
  inputBorder: {
    borderRadius: 15,
    backgroundColor: "#fff",
    ...theme.mb2,
    ...theme.flexDirectionRow,
    ...theme.alignItemsCenter,
    borderWidth: 1.4,
    borderColor: "#ddd",
  },
  input: {
    height: 60,
    letterSpacing: -0.5,
    ...theme.fontWeightBold,
    ...theme.fontBase,
    ...theme.ml1,
    color: "#000",
    width: "100%",
  },
  buttonLogin: {
    backgroundColor: theme.colors.purple,
  },
  buttonLoginText: {
    color: "#fff",
  },
  forgotPassword: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});

export default LoginForm;
