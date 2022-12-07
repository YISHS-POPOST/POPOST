import { StyleSheet, View, Pressable } from "react-native";
import theme from "../../theme";
import { BoldText } from "../Text";
import StartPressButton from "./StartPressButton";

const StartContentButton = () => {
  return (
    <View style={[styles.container, theme.flexDirectionColumn]}>
      <StartPressButton backgroundColor={theme.colors.blue} content="로그인" />
      <StartPressButton backgroundColor={theme.colors.red} content="회원가입" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  button: {
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
  },
  buttonRed: {
    backgroundColor: theme.colors.red,
  },
  buttonBlue: {
    backgroundColor: theme.colors.blue,
  },
});

export default StartContentButton;
