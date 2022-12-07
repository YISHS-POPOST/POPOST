import { View , StyleSheet , Text} from "react-native";
import theme from "../theme";

const StartScreen = () => {
  return (
    <View style={theme.container}>
      <Text style={styles.fontText}>dd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontText : {
    fontFamily : "Pretendard-Bold",
  }
});

export default StartScreen;
