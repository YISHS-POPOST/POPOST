import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { BoldText } from "../components/Text";
import theme from "../theme";
import StartHeader from "../components/start/StartHeader";
import StartImage from "../components/start/StartImage";
import StartContent from "../components/start/StartContent";

const StartScreen = () => {
  return (
    <SafeAreaView style={[theme.container , styles.background]}>
      <StartHeader />
      <StartImage />
      <StartContent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background : {
    backgroundColor : '#fff',
  }
});

export default StartScreen;
