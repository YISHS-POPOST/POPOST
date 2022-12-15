import { StyleSheet, View, Dimensions, Image } from "react-native";
import theme from "../../theme";
import { RegularText, BoldText, ThinText } from "../Text";
import { ChatPropsType } from "../../types/MessengerType";

const deviceWidth = Dimensions.get("window").width;

interface Props extends ChatPropsType {
  time: Date;
  content: string[];
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
      <View
        style={[
          theme.justifyContentCenter,
          theme.pt1,
          styles.time,
          theme.alignItemsCenter,
        ]}
      >
        <RegularText style={{ color: "#666" }}>{timeTxt}</RegularText>
      </View>
      <View style={[styles.container, theme.flexDirectionRow, theme.mb1]}>
        <View style={[styles.profileContainer, theme.alignItemsCenter]}>
          <View style={[styles.profile]}>
            <Image source={image} style={{ height: "100%", width: "100%" }} />
          </View>
        </View>
        <View style={[styles.contentContainer, theme.ml2]}>
          <RegularText
            style={[theme.mb1, theme.mt1, styles.name, theme.fontBase]}
          >
            {name}
          </RegularText>
          {content.map((item , idx) => (
            <BoldText
              key={idx}
              style={[styles.text, theme.fontBase, theme.p2, theme.mb1]}
            >
              {item}
            </BoldText>
          ))}
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
  contentContainer: {},
  name: {
    color: "#333",
  },
  time: {
    textAlign: "center",
    flex: 1,
  },
});

export default MessengerChatOther;