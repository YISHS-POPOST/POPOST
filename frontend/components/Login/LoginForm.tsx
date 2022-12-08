import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import { BoldText } from "../Text";

const LoginForm = () => {
  return (
    <View
      style={[
        styles.container,
        theme.justifyContentCenter,
        theme.alignItemsCenter,
      ]}
    >
      <BoldText style={[theme.fontTitleSize, styles.titleText , theme.pt2 , theme.pb2]}>
        SIGN IN
      </BoldText>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  titleText: {
    color: "#000",
  },
});

export default LoginForm;
