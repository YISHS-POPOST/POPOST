import { View, StyleSheet, Image } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../Text";
import { MessengerRooms } from "../../screens/HomeScreen";
import { API_URL } from "@env";

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
            source={
              contentItem.inviteUser.profile
                ? // 백엔드 경로 설정 필요
                  {
                    uri:
                      API_URL +
                      "/files/profile/" +
                      contentItem.inviteUser.profile,
                  }
                : require("../../assets/image/profile/default.jpg")
            }
            style={[styles.image]}
          />
          <View style={[theme.ml2]}>
            <RegularText style={[styles.nameText, theme.fontSmall]}>
              {contentItem.inviteUser.name}
            </RegularText>
            <BoldText style={[styles.contentText, theme.fontBase]}>
              {!contentItem.message
                ? ""
                : contentItem.message.content.length > 20
                ? contentItem.message.content.substring(0, 25) + "..."
                : contentItem.message.content}
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
            source={
              contentItem.createUser.profile
                ? // 백엔드 경로 설정 필요
                  {
                    uri:
                      API_URL +
                      "/files/profile/" +
                      contentItem.createUser.profile,
                  }
                : require("../../assets/image/profile/default.jpg")
            }
            style={[styles.image]}
          />
          <View style={[theme.ml2]}>
            <RegularText style={[styles.nameText, theme.fontSmall]}>
              {contentItem.createUser.name}
            </RegularText>
            <BoldText style={[styles.contentText, theme.fontBase]}>
              {!contentItem.message
                ? ""
                : contentItem.message.content.length > 20
                ? contentItem.message.content.substring(0,20) + "..."
                : contentItem.message.content}
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
