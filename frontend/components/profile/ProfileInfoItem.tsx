import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import { BoldText } from "../Text";

const ProfileInfoItem = () => {
  return (
    <View
      style={[styles.infoItem, theme.pt3, theme.pb3, theme.pl2, theme.pr2 , theme.flexDirectionRow , theme.justifyContentBetween , theme.alignItemsCenter , theme.sectionBorderRadius]}
    >
        <BoldText>팔로워</BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  infoItem: {
    backgroundColor: "#fff",
    height : 60,
  },
});

export default ProfileInfoItem;
