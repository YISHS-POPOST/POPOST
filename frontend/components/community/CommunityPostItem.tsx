import { View, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../../components/Text";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CommunityLinkPreview from './CommunityLinkPreview';
import { ItemInterface } from "../../types/CommunityType";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import axios from "axios";
import { API_URL } from "@env";

interface ListInterface extends ItemInterface {
    navigation: ProfileScreenNavigationProp;
}

const CommunityPostItem = ({
  user_image,
  user_name,
  user_nickname,
  create_dt,
  title,
  content,
  link,
  comment,
  view,
  navigation,
}:ListInterface) => {

  const followsAction = () => {
    axios.post(API_URL + "");
  }

  return (
    <View>
      <View style={[theme.mt2, styles.container]}>
        <View
          style={[
            theme.pt2,
            theme.flexDirectionRow,
            theme.justifyContentBetween,
          ]}
        >
          <View
            style={[
              theme.flexDirectionRow,
              theme.justifyContentStart,
              theme.alignItemsCenter,
            ]}
          >
            <Image source={user_image} style={[styles.image]} />
            <View style={theme.ml2}>
              <BoldText
                style={[styles.text, styles.textLineHeight, styles.black]}
              >
                {user_name}
              </BoldText>
              <RegularText
                style={[styles.text, styles.textLineHeight, styles.gray]}
              >
                {user_nickname === null ? "별명이 설정되어 있지 않습니다." : user_nickname }
              </RegularText>
              <RegularText
                style={[styles.text, styles.textLineHeight, styles.gray]}
              >
                {create_dt}
              </RegularText>
            </View>
          </View>
          <View style={[theme.justifyContentCenter]}>
            <TouchableOpacity activeOpacity={0.8} onPress={followsAction}
              style={[
                styles.button,
                { backgroundColor: theme.colors.softBlue },
                theme.p1,
                theme.mb1,
              ]}
            >
              <BoldText
                style={[
                  theme.fontSmall,
                  theme.justifyContentEnd,
                  theme.pl1,
                  theme.pr1,
                  { color: theme.colors.blue },
                ]}
              >
                팔로우
              </BoldText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[theme.mt2, theme.mb2]}>
          <BoldText
            style={[styles.text, styles.black, theme.fontLg, theme.mb2]}
          >
            {title}
          </BoldText>
          <RegularText style={[styles.text, styles.black, theme.fontBase]}>
            {content}
          </RegularText>
        </View>
        <View>
            {link === "" ? null : <CommunityLinkPreview siteUrl={link}/>}
        </View>
        <View style={[theme.mt2, theme.alignItemsEnd]}>
          <RegularText style={[styles.text, styles.gray]}>{`조회 ${view}`}</RegularText>
        </View>
        <View style={[theme.mb2, theme.flexDirectionRow]}>
          <View
            style={[theme.flexDirectionRow, theme.alignItemsCenter, theme.mr3]}
          >
            <AntDesign name="like2" style={styles.icon} size={17} />
            <BoldText style={[styles.icon, theme.fontSmall, theme.ml1]}>
              좋아요
            </BoldText>
          </View>
          <View
            style={[theme.flexDirectionRow, theme.alignItemsCenter, theme.mr3]}
          >
            <AntDesign name="sharealt" style={styles.icon} size={17} />
            <BoldText style={[styles.icon, theme.fontSmall, theme.ml1]}>
              공유
            </BoldText>
          </View>
          <View
            style={[theme.flexDirectionRow, theme.alignItemsCenter, theme.mr3]}
          >
            <MaterialCommunityIcons
              name="comment-outline"
              style={styles.icon}
              size={17}
            />
            <RegularText style={[styles.icon, theme.fontSmall, theme.ml1]}>
              {`${comment}`}
            </RegularText>
          </View>
          {/* <View
            style={[theme.flexDirectionRow, theme.alignItemsCenter, theme.mr3]}
          >
            <MaterialCommunityIcons
              name="bookmark-outline"
              style={styles.icon}
              size={20}
            />
            <RegularText style={[styles.icon, theme.fontSmall, theme.ml1]}>
              0
            </RegularText>
          </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    letterSpacing: -0.5,
  },
  textLineHeight: {
    lineHeight: 17,
  },
  black: {
    color: "#000",
  },
  gray: {
    color: "#6d6d6d",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  button: {
    borderRadius: 5,
    backgroundColor: theme.colors.softBlue,
  },
  icon: {
    color: "#7e7e7e",
  },
});

export default CommunityPostItem;
