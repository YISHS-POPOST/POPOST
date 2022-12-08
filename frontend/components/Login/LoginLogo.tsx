import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import { BlackText } from "../Text";

const LoginLogo = () => {
  return (
    <View style={[styles.container , theme.alignItemsCenter , theme.justifyContentCenter]}>
      <BlackText style={[styles.blackText ]}>POPOST</BlackText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blackText: {
    fontSize: 40,
    color : '#333',
  },
});

export default LoginLogo;
