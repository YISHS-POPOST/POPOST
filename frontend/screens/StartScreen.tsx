import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import {BoldText} from "../components/Text";
import theme from "../theme";

const StartScreen = () => {
  return (
    <SafeAreaView style={theme.container}>
      <BoldText style={styles.fontText}>안녕</BoldText>
      <Text style={[theme.pt5, theme.pb5, styles.fontText]}>안녕하세요</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontText: {
    fontSize : 20,
  },
});

export default StartScreen;
