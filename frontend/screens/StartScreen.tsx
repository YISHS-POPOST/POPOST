import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { BoldText } from "../components/Text";
import theme from "../theme";
import StartHeader from "../components/start/StartHeader";
import StartImage from "../components/start/StartImage";
import StartContent from "../components/start/StartContent";
import {ProfileScreenNavigationProp} from "../types/NavigateType";

const StartScreen = ({navigation} : ProfileScreenNavigationProp) => {
  return (
    <SafeAreaView style={[theme.container , styles.background]}>
      <StartImage />
      <StartContent navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background : {
    backgroundColor : '#fff',
  }
});

export default StartScreen;
