import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../Text";

const StartContentStart = () => {
  return (
    <View style={[styles.container, theme.justifyContentCenter]}>
      <View style={[styles.textContainer]}>
        <BoldText style={[theme.fontTitleSize, styles.boldText]}>
          안녕하세요!
        </BoldText>
        <RegularText style={[theme.fontBase, theme.mt3, styles.regularText]}>
          친구들과 쪽지를 두고 찾으며 커뮤니케이션을 즐겨요.
        </RegularText>
        <RegularText style={[theme.fontBase, styles.regularText]}>
          가까운 곳에 숨겨져 있을꺼에요!
        </RegularText>
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
    letterSpacing: 5,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: 350,
  },
  regularText: {
    color: "#666",
  },
});

export default StartContentStart;
