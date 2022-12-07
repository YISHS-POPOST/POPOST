import { View, Text, StyleSheet } from "react-native";
import theme from "../../theme";

const StartHeader = () => {
  return <View style={[styles.container, theme.pt3, theme.pb3]}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#333'
  },
});

export default StartHeader;
