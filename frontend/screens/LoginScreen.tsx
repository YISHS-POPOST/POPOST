import { StyleSheet, SafeAreaView } from "react-native";

import theme from "../theme";

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={[theme.container, theme.ml3, theme.mr3]}
    ></SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
