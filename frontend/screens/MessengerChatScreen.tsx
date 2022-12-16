import { ScrollView, StyleSheet, View } from "react-native";
import MessengerChatBottom from "../components/messenger/MessengerChatBottom";
import MessengerChatContent from "../components/messenger/MessengerChatContent";
import theme from "../theme";


const MessengerChatScreen = ({ route }: any) => {
  const {image , name , state} = route.params;

  return (
    <View style={[theme.flexDirectionColumn, styles.container]}>
      <MessengerChatContent image={image} name={name} />
      <MessengerChatBottom />
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
  }
})

export default MessengerChatScreen;
