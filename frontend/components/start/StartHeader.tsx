import { View, StyleSheet } from "react-native";
import { BlackText } from "../Text";
import theme from "../../theme";

const StartHeader = () => {
  return (
    <View
      style={[
        styles.container,
        theme.justifyContentCenter,
      ]}
    >
      <BlackText style={[theme.fontXxxl , styles.titleColor]}>POPOST</BlackText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleColor : {
    color : '#333'
  }
});

export default StartHeader;
