import { StyleSheet, SafeAreaView, TextInput, Pressable } from "react-native";
import theme from "../../theme";
import Ionicons from "react-native-vector-icons/Ionicons";

const MessengerChatBottom = () => {
  return (
    <SafeAreaView
      style={[
        theme.container,
        styles.container,
        theme.flexDirectionRow,
        theme.alignItemsCenter,
      ]}
    >
      <TextInput
        style={[styles.textInput, theme.pl2, theme.pr2, theme.fontBase]}
        placeholder="메시지를 입력해주세요."
        placeholderTextColor={"#aaa"}
      ></TextInput>
      <Pressable
        style={[
          styles.button,
          theme.alignItemsCenter,
          theme.justifyContentCenter,
          theme.ml2,
        ]}
      >
        <Ionicons name="ios-paper-plane" size={20} color="#fff" />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 0,
    height: 70,
    borderTopColor : '#eee',
    borderTopWidth : 1,
  },
  textInput: {
    flex: 1,
    height: 50,
    backgroundColor: theme.colors.backgroundWhite,
    borderRadius: 100,
    color: "#333",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: theme.colors.blue,
  },
});

export default MessengerChatBottom;
