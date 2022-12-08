import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import PressButton from "../PressButton";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";

  const StartContentButton = ({navigation} : ProfileScreenNavigationProp) => {
  return (
    <View style={[styles.container, theme.flexDirectionColumn]}>
      <PressButton
        style={styles.buttonLogin}
        textStyle={styles.buttonLoginText}
        content="로그인"
        onPress={() => {
          navigation.navigate("login");
        }}
      />
      <PressButton
        style={styles.buttonRegister}
        textStyle={styles.buttonRegisterText}
        content="아직 회원이 아니신가요?"
        onPress={() => {
          navigation.navigate("register");
        }}
      />
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
  buttonLogin: {
    backgroundColor: theme.colors.purple,
  },
  buttonRegister: {
    backgroundColor: "#fff",
    borderColor: theme.colors.purple,
    borderWidth: 1,
  },
  buttonLoginText: {
    color: "#fff",
  },
  buttonRegisterText: {
    color: theme.colors.purple,
  },
});

export default StartContentButton;
