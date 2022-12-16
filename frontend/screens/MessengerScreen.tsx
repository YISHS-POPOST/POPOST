import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import MessengerList from "../components/messenger/MessengerList";
import { ProfileScreenNavigationProp } from "../types/NavigateType";

const MessengerScreen = ({navigation} : ProfileScreenNavigationProp) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <MessengerList navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default MessengerScreen;
