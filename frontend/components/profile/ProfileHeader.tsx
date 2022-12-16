import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import { BoldText } from "../Text";

const ProfileHeader = () => {
  return (
    <View style={[styles.container]}>
      <BoldText style={[theme.fontXxxl, styles.textContainer]}>
        내 프로필
      </BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    textAlign: "center",
  },
  textContainer: {
    color: "#333",
    textAlign: "center",
  },
});

export default ProfileHeader;
