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
        theme.pt2,
        theme.pb2,
        theme.flexDirectionRow,
      ]}
    >
      <BoldText style={[styles.title, theme.fontXxxl]}>Chats</BoldText>
      <Feather name="share" size={25} color="#333" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#333",
  },
});

export default MessengerHeader;
