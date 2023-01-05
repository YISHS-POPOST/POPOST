import { View, StyleSheet, ScrollView } from "react-native";

import theme from "../../theme";
import { BoldText, RegularText } from "../Text";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { HomeItemPayload } from "../../screens/HomeScreen";
import Feather from "react-native-vector-icons/Feather";

interface Prop {
  homeItem: HomeItemPayload;
}

const HomeNote = ({ homeItem }: Prop) => {
  return (
    <ScrollView
      overScrollMode="never"
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={[theme.mt2, theme.mb2, styles.container]}
    >
      <View style={[styles.informationContainer, theme.ml2, theme.p3]}>
        <View>
          <RegularText style={[styles.regText, theme.fontSmall]}>
            내가 생성한 쪽지
          </RegularText>
          <BoldText style={[theme.fontXl, styles.boldText]}>
            {`${homeItem.NoteCnt}` + "개"}
          </BoldText>
        </View>
        <View style={theme.alignItemsEnd}>
          <MaterialCommunityIcons
            name="notebook-plus-outline"
            size={30}
            color={"#32ce32"}
            
          />
        </View>
      </View>
      <View
        style={[styles.informationContainer, theme.ml2, theme.mr2, theme.p3]}
      >
        <View>
          <RegularText style={[styles.regText, theme.fontSmall]}>
            팔로잉
          </RegularText>
          <BoldText style={[theme.fontXl, styles.boldText]}>
            {`${homeItem.followingCnt}` + "명"}
          </BoldText>
        </View>
        <View style={theme.alignItemsEnd}>
          <Feather
            name="users"
            size={30}
            color={theme.colors.purple}
          />
        </View>
      </View>
      <View style={[styles.informationContainer, theme.mr2, theme.p3]}>
        <View>
          <RegularText style={[styles.regText, theme.fontSmall]}>
            팔로워
          </RegularText>
          <BoldText style={[theme.fontXl, styles.boldText]}>
            {`${homeItem.followerCnt}` + "명"}
          </BoldText>
        </View>
        <View style={theme.alignItemsEnd}>
        <Feather
            name="user-check"
            size={30}
            color={theme.colors.blue}
          />
        </View>
      </View>
      <View style={[styles.informationContainer, theme.mr2, theme.p3]}>
        <View>
          <RegularText style={[styles.regText, theme.fontSmall]}>
            댓글 작성한 갯수
          </RegularText>
          <BoldText style={[theme.fontXl, styles.boldText]}>
            {`${homeItem.communityApplyCnt}` + "개"}
          </BoldText>
        </View>
        <View style={theme.alignItemsEnd}>
          <MaterialCommunityIcons
            name="comment-multiple"
            size={30}
            color={"#e76209"}
            
          />
        </View>
      </View>
      <View style={[styles.informationContainer, theme.mr2, theme.p3]}>
        <View>
          <RegularText style={[styles.regText, theme.fontSmall]}>
            글 작성한 갯수
          </RegularText>
          <BoldText style={[theme.fontXl, styles.boldText]}>
            {`${homeItem.communityCnt}` + "개"}
          </BoldText>
        </View>
        <View style={theme.alignItemsEnd}>
          <MaterialCommunityIcons
            name="book-open-variant"
            size={30}
            color={theme.colors.red}
            
          />
        </View>
      </View>
      <View style={[styles.informationContainer, theme.mr2, theme.p3]}>
        <View>
          <RegularText style={[styles.regText, theme.fontSmall]}>
            좋아요 누른 갯수
          </RegularText>
          <BoldText style={[theme.fontXl, styles.boldText]}>
            {`${homeItem.communityLikeCnt}` + "개"}
          </BoldText>
        </View>
        <View style={theme.alignItemsEnd}>
          <AntDesign
            name="like1"
            size={30}
            color={"#0a55f7"}
            
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundWhite,
  },
  informationContainer: {
    width: 140,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    ...theme.flexDirectionColumn,
    ...theme.justifyContentBetween,
  },
  regText: {
    color: "#555",
    letterSpacing: -0.5,
  },
  nextText: {
    color: "#999",
    letterSpacing: -0.5,
  },
  boldText: {
    color: "#000",
    letterSpacing: -0.5,
    lineHeight: 30,
  },
});

export default HomeNote;
