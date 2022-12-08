import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../Text";

const StartContentStart = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.textContainer]}>
        <BoldText style={[theme.fontTitleSize, styles.boldText]}>
          Welcome To Popost
        </BoldText>
        <RegularText style={[theme.fontBase, theme.mt3, styles.regularText]}>
          GPS를 켜고 친구, 가족, 이웃들과 쪽지를 주고받아보세요. 이전에는 없던
          새로운 커뮤니케이션 방식입니다. 가까운 곳에 당신에게 온 쪽지가 있을
          수도 있어요!
        </RegularText>
        <View
          style={[
            styles.underBar,
            theme.mt3
          ]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
  },
  boldText: {
    color: "#333",
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: 350,
  },
  regularText: {
    color: "#747e8d",
    textAlign: "center",
  },
  underBar: {
    width: 100,
    height: 5,
    backgroundColor: theme.colors.purple,
    borderRadius: 100,
  },
});

export default StartContentStart;
