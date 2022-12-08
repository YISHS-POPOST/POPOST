import { StyleSheet, View } from "react-native";
import StartContentText from "./StartContentText";
import StartContentButton from "./StartContentButton";
import {ProfileScreenNavigationProp} from "../../types/NavigateType";


const StartContent = ({navigation} : ProfileScreenNavigationProp) => {
  return (
    <View style={styles.container}>
      <StartContentText />
      <StartContentButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StartContent;
