import { StyleSheet, View } from "react-native";
import StartContentText from "./StartContentText";
import StartContentButton from "./StartContentButton";

const StartContent = () => {
  return (
    <View style={styles.container}>
      <StartContentText />
      <StartContentButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
});

export default StartContent;
