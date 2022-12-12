import { StyleSheet, SafeAreaView } from "react-native";
import { ProfileScreenNavigationProp } from "../types/NavigateType";
import LoginLogo from "../components/Login/LoginLogo";
import LoginForm from "../components/Login/LoginForm";
import LoginOther from "../components/Login/LoginOther";
import theme from "../theme";

const LoginScreen = ({ navigation }: ProfileScreenNavigationProp) => {
  // 비율 1 : 3 : 2

  return (
    <SafeAreaView style={[theme.container]}>
      <LoginLogo />
      <LoginForm navigation={navigation} />
      <LoginOther />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default LoginScreen;
