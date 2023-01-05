import { View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../../components/Text";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CommunityLinkPreview from "./CommunityLinkPreview";
import { ItemInterface } from "../../types/CommunityType";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import { useState } from "react";
import { API_URL } from "@env";
import CommunityFollow from "./CommunityFollows";
import CommunityCommentModal from "./CommunityApplyModal";
import CommunityLike from "./CommunityLike";

interface ListInterface extends ItemInterface {
  navigation: ProfileScreenNavigationProp;
}

const CommunityPostItem = ({
  id,
  user_id,
  user_profile,
  user_name,
  user_nickname,
  create_dt,
  title,
  content,
  link,
  comment,
  view,
  navigation,
  list
}: ListInterface) => {
  const [modalVisible, setModalVisible] = useState(false);

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
            {user_profile === null ? (
              <Image
                source={require("../../assets/image/profile/default.jpg")}
                style={styles.image}
              />
            ) : (
              <Image
              source={{ uri: API_URL + "/files/profile/" + user_profile }}
                style={styles.image}
              />
            )}

            <View style={theme.ml2}>
              <BoldText
                style={[styles.text, styles.textLineHeight, styles.black]}
              >
                {user_name}
              </BoldText>
              <RegularText
                style={[styles.text, styles.textLineHeight, styles.gray]}
              >
                {user_nickname === null
                  ? "별명이 설정되어 있지 않습니다."
                  : user_nickname}
              </RegularText>
              <RegularText
                style={[styles.text, styles.textLineHeight, styles.gray]}
              >
                {new Date(create_dt)
                  .toISOString()
                  .slice(0, 19)
                  .replace("T", " ")}
              </RegularText>
            </View>
          </View>
          <View style={[theme.justifyContentCenter]}>
            <CommunityFollow follow_id={user_id}/>
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
          {link === "" ? null : <CommunityLinkPreview siteUrl={link} />}
        </View>
        {/* 조회수 기능 X */}
        {/* <View style={[theme.mt2, theme.alignItemsEnd]}>
          <RegularText style={[styles.text, styles.gray]}>{`조회 ${view}`}</RegularText>
        </View> */}
        <View style={[theme.mb2, theme.flexDirectionRow, theme.mt2]}>
          <CommunityLike community_id={id} list={list} />
          {/* <View
            style={[theme.flexDirectionRow, theme.alignItemsCenter, theme.mr3]}
          >
            <AntDesign name="sharealt" style={styles.icon} size={17} />
            <BoldText style={[styles.icon, theme.fontSmall, theme.ml1]}>
              공유
            </BoldText>
          </View> */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <View
              style={[
                theme.flexDirectionRow,
                theme.alignItemsCenter,
                theme.mr3,
              ]}
            >
              <MaterialCommunityIcons
                name="comment-outline"
                style={styles.icon}
                size={17}
              />

              <RegularText style={[styles.icon, theme.fontSmall, theme.ml1]}>
                {`${comment.length}`}
              </RegularText>
            </View>
          </TouchableOpacity>
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
      <CommunityCommentModal
        id={id}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
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
  icon: {
    color: "#7e7e7e",
},
});

export default CommunityPostItem;
