import { SafeAreaView, StyleSheet , ScrollView } from "react-native";
import MessengerHeader from "../components/messenger/MessengerHeader";
import MessengerList from "../components/messenger/MessengerList";
import MessengerSearch from "../components/messenger/MessengerSearch";
import theme from "../theme";

const MessengerScreen = () => {
  return (
    <SafeAreaView style={[theme.container, styles.container]}>
      <ScrollView >
        <MessengerHeader />
        <MessengerSearch />
        <MessengerList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default MessengerScreen;
