import { View, StyleSheet, Image } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../Text";
import { MessengerRooms } from "../../screens/HomeScreen";

interface Prop {
  contentItem: MessengerRooms;
}

const HomeMessengerContents = ({ contentItem }: Prop) => {
  if (contentItem.inviteUser) {
    return (
      <View
        style={[
          theme.flexDirectionRow,
          theme.justifyContentBetween,
          theme.pt2,
          theme.pb2,
        ]}
      >
        <View style={[theme.flexDirectionRow]}>
          <Image
            source={require("../../assets/image/profile/test_profile.jpg")}
            style={[styles.image]}
          />
          <View style={[theme.ml2]}>
            <RegularText style={[styles.nameText, theme.fontSmall]}>
              최시우스 주니오르
            </RegularText>
            <BoldText style={[styles.contentText, theme.fontBase]}>
              메세지 텍스트입니다...
            </BoldText>
          </View>
        </View>
      </View>
    );
  } else if (contentItem.createUser) {
    return (
      <View
        style={[
          theme.flexDirectionRow,
          theme.justifyContentBetween,
          theme.pt2,
          theme.pb2,
        ]}
      >
        <View style={[theme.flexDirectionRow]}>
          <Image
            source={require("../../assets/image/profile/test_profile.jpg")}
            style={[styles.image]}
          />
          <View style={[theme.ml2]}>
            <RegularText style={[styles.nameText, theme.fontSmall]}>
              최시우스 주니오르
            </RegularText>
            <BoldText style={[styles.contentText, theme.fontBase]}>
              메세지 텍스트입니다...
            </BoldText>
          </View>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: theme.colors.softBlue,
  },
  timeText: {
    padding: 8,
    letterSpacing: -0.5,
    color: theme.colors.blue,
  },
  nameText: {
    letterSpacing: -0.5,
    color: "#8d8d8d",
    marginBottom: 3,
  },
  contentText: {
    letterSpacing: -0.5,
    color: "#000",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});

export default HomeMessengerContents;
