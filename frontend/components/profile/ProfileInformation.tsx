import { View, Image, StyleSheet } from "react-native";
import theme from "../../theme";
import { BlackText, RegularText } from "../Text";
import PressButton from "../PressButton";

const ProfileInformation = () => {
  return (
    <View style={[theme.mainContainer, styles.container, theme.pt3, theme.pb3]}>
      <View style={[styles.imageView]}>
        <Image
          source={require("../../assets/image/profile/test_profile.jpg")}
          style={[styles.image]}
        />
      </View>
      <View style={[theme.mb3, theme.mt3]}>
        <BlackText style={[styles.name]}>최시우스 주니오르</BlackText>
        <RegularText style={[theme.fontBase, styles.informationText]}>
          Creative director at @ui8.net Creative director at @ui8.net Creative
          director at @ui8.net
        </RegularText>
      </View>
      <View
        style={[
          theme.flexDirectionRow,
          theme.justifyContentBetween,
          theme.alignItemsCenter,
        ]}
      >
        <PressButton
          content="편집"
          style={[
            styles.editBtn,
            theme.mr1,
            theme.alignItemsCenter,
            theme.justifyContentCenter,
          ]}
          textStyle={[styles.editText, theme.fontXl]}
        />
        <PressButton
          content="공유"
          style={[
            styles.messageBtn,
            theme.ml1,
            theme.alignItemsCenter,
            theme.justifyContentCenter,
          ]}
          textStyle={[styles.messageText, theme.fontXl]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageView: {
    borderRadius: 20,
    overflow: "hidden",
    width: 140,
    height: 140,
  },
  name: {
    fontSize: 40,
    color: "#333",
  },
  editBtn: {
    backgroundColor: "#333",
    flex: 3,
  },
  editText: {
    color: "#fff",
  },
  messageBtn: {
    backgroundColor: theme.colors.blue,
    flex: 1,
  },
  messageText: {
    color: "#fff",
  },
  informationText: {
    color: "#999",
    letterSpacing: -1,
  },
});

export default ProfileInformation;
