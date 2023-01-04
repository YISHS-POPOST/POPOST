import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../Text";
import { ProfileItemPayload } from "../../types/User";

type prop = {
  profileItem: ProfileItemPayload;
};

// 좋아요 , 공유애 맞춘 섹션
const ProfileActivities = ({ profileItem }: prop) => {
  return (
    <View style={[theme.mainContainer, theme.mb3]}>
      <View style={[styles.container, theme.p3, theme.sectionBorderRadius]}>
        <View style={[theme.pb2]}>
          <BoldText style={[theme.fontXxxl, styles.title]}>나의 활동</BoldText>
        </View>
        <View
          style={[
            theme.flexDirectionRow,
            theme.alignItemsCenter,
            theme.justifyContentBetween,
            styles.activityContainer,
            theme.sectionBorderRadius,
          ]}
        >
          <View
            style={[
              styles.activityItem,
              theme.justifyContentCenter,
              theme.flexDirectionColumn,
              theme.alignItemsCenter,
              theme.pt3,
              theme.pb3,
            ]}
          >
            <RegularText style={[styles.activityTitle, theme.fontBase]}>
              좋아요
            </RegularText>
            <BoldText style={[styles.activitTotal, theme.fontXxl]}>0</BoldText>
          </View>
          <View
            style={[
              styles.activityItem,
              theme.justifyContentCenter,
              theme.flexDirectionColumn,
              theme.alignItemsCenter,
              theme.pt3,
              theme.pb3,
            ]}
          >
            <RegularText style={[styles.activityTitle, theme.fontBase]}>
              댓글
            </RegularText>
            <BoldText
              style={[styles.activitTotal, theme.fontXxl]}
            >{`${profileItem.communityApplyCnt}`}</BoldText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  activityItem: {
    flex: 1,
  },
  activityTitle: {
    color: "#ccc",
  },
  activitTotal: {
    color: "#fff",
  },
  activityContainer: {
    backgroundColor: "#333",
  },
  title: {
    color: "#333",
  },
});

export default ProfileActivities;
