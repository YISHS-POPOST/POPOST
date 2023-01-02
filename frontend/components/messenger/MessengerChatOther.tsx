import { StyleSheet, View, Dimensions, Image } from "react-native";
import theme from "../../theme";
import { RegularText, BoldText, ThinText } from "../Text";
import { ChatPropsType } from "../../types/MessengerType";
import { API_URL } from "@env";

const deviceWidth = Dimensions.get("window").width;

interface Props extends ChatPropsType {
  time: Date;
  content: string;
}

const MessengerChatOther = ({ image, name, time, content }: Props) => {
  const nowDate = new Date();

  const timeTxt =
    time.getDate() === nowDate.getDate() &&
    time.getMonth() === nowDate.getMonth()
      ? `${time.getHours()}시 ${
          time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
        }분`
      : time.getDate() === nowDate.getDate() - 1 &&
        time.getMonth() === nowDate.getMonth()
      ? "Yesterday"
      : `${time.getMonth() + 1}월 ${time.getDate()}일`;

  return (
    <View style={[{ flex: 1 }]}>
      <View style={[styles.container, theme.flexDirectionRow, theme.mb1 ]}>
        <View style={[styles.profileContainer, theme.alignItemsCenter]}>
          <View style={[styles.profile]}>
            {!image ? (
              <Image
                source={require("../../assets/image/profile/default.jpg")}
                style={{ height: "100%", width: "100%" }}
              />
            ) : (
              <Image
                source={{ uri: API_URL + "/files/profile/" + image }}
                style={{ height: "100%", width: "100%" }}
              />
            )}
          </View>
        </View>
        <View style={[styles.contentContainer, theme.ml2 ]}>
          <RegularText
            style={[theme.mb1, theme.mt1, styles.name, theme.fontBase]}
          >
            {name}
          </RegularText>
          <View style={[theme.alignItemsEnd, theme.flexDirectionRow]}>
            <BoldText
              style={[styles.text, theme.fontBase, theme.p2, theme.mb1]}
            >
              {content}
            </BoldText>
            <RegularText style={[{ color: "#666" } , theme.ml2]}>{timeTxt}</RegularText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: deviceWidth - 130,
  },
  text: {
    color: "#fff",
    backgroundColor: "#333",
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  profileContainer: {
    width: 50,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",
    borderColor: theme.colors.purple,
    borderWidth: 3,
  },
  contentContainer: {
    maxWidth: deviceWidth - 200,
  },
  name: {
    color: "#333",
  },
  time: {
    textAlign: "center",
    flex: 1,
  },
});

export default MessengerChatOther;
