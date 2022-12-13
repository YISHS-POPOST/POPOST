import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import { BoldText } from "../Text";
import Feather from "react-native-vector-icons/Feather";

const MessengerHeader = () => {
  return (
    <View
      style={[
        theme.alignItemsCenter,
        theme.justifyContentBetween,
        theme.pt3,
        theme.pb3,
        theme.flexDirectionRow
      ]}
    >
      <BoldText style={[styles.title]}>Chats</BoldText>
        <Feather name="share" size={25} color="#333"   />      
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#000",
    fontSize : 40
  },
});

export default MessengerHeader;
