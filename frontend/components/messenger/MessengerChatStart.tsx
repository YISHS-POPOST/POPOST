import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import theme from "../../theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlackText, RegularText, BoldText } from "../Text";
import axios from "axios";
import { useState } from "react";
import { API_URL } from "@env";
import { useSelector } from "react-redux";
import { StateInterface } from "../../src/type/state";

interface Prop {
  userId: string;
  checkChatRoom : () => Promise<void>;
}

const MessengerChatStart = (props: Prop) => {
  const { userId , checkChatRoom } = props;
  const users = useSelector((state: StateInterface) => state.users);
  
  // 유저 아이디 , 내 아이디
  const startChat = async () => {
    const postInfo = {
      createUserId: users.id,
      inviteUserId: userId,
    };
    await axios
      .post(API_URL + "/message-rooms", postInfo)
      .then(async (res) => {
        const { status, data } = res;
        if (status === 200) {
          Alert.alert("완료", "채팅방이 생성되었습니다. 채팅을 시작하세요!");
          await checkChatRoom();
        }
      })
      .catch(err =>
        Alert.alert(
          "Error",
          "중복된 채팅은 생성할 수 없습니다. 조금만 기다려주세요."
        )
      );
  };

  return (
    <View
      style={[
        theme.justifyContentCenter,
        theme.alignItemsCenter,
        styles.container,
      ]}
    >
      <Ionicons
        name="md-chatbubble-ellipses-outline"
        color={"#777"}
        size={50}
      />
      <BlackText style={[theme.fontXl, styles.title]}>
        아직 대화를 시작하지 않았습니다.
      </BlackText>
      <RegularText style={[theme.fontBase, styles.content, theme.mt3]}>
        대화를 시작하기 위해서
      </RegularText>
      <RegularText style={[theme.fontBase, styles.content]}>
        아래 버튼을 클릭해주세요.
      </RegularText>
      <TouchableOpacity
        style={[
          theme.pt2,
          theme.pb2,
          styles.button,
          theme.alignItemsCenter,
          theme.justifyContentCenter,
          theme.sectionBorderRadius,
          theme.mt3,
        ]}
        onPress={startChat}
      >
        <BoldText style={[styles.buttonText, theme.fontLg]}>대화 시작</BoldText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#777",
  },
  content: {
    color: "#777",
  },
  button: {
    backgroundColor: theme.colors.purple,
    width: 150,
  },
  buttonText: {
    color: "#fff",
  },
});

export default MessengerChatStart;
