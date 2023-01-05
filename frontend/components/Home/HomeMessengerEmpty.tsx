import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { BoldText } from "../Text";

const HomeMessengerEmpty = () => {
  return (
    <View
      style={[
        styles.container,
        theme.alignItemsCenter,
        theme.justifyContentCenter,
        theme.flexDirectionColumn,
      ]}
    >
      <MaterialCommunityIcons
        name="message-settings-outline"
        size={80}
        color={"#777"}
      />
      <BoldText style={[styles.text, theme.fontXxl, theme.mt3]}>
        커뮤니티 친구들과
      </BoldText>
      <BoldText style={[styles.text, theme.fontXxl]}>
        메신저를 시작해보세요!
      </BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
  },
  text: {
    color: "#777",
  },
});

export default HomeMessengerEmpty;
