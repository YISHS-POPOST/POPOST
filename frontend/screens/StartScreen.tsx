import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import {BoldText} from "../components/Text";
import theme from "../theme";
import StartHeader from "../components/start/StartHeader";

const StartScreen = () => {
  return (
    <SafeAreaView style={theme.container}>
      <StartHeader />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontText: {
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  buttons: {
    flex: 1,
  },
});

export default StartScreen;
