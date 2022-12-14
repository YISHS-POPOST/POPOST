import { View, StyleSheet, FlatList, Image } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../../components/Text";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// import CommunityLinkPreview from './CommunityLinkPreview';

import { getLinkPreview } from "link-preview-js";
import { useEffect, useState } from "react";

const CommunityPostItem = () => {};

const CommunityLinkPreview = () => {
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    getLinkPreview("http://ai-design.or.kr/").then((data: any) => {
      setMetaData([
        {
          titie: `${data.title}`,
          description: `${data.description}`,
          image: `${data.images[0]}`,
        },
      ]);
    });
  }, []);

  return <View></View>;
};

const CommunityPost = () => {
  return (
    <View>
      {/* {CommunityPostItem}       */}
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
            <Image
              source={require("../../assets/image/profile/test_profile.jpg")}
              style={[styles.image]}
            />
            <View style={theme.ml2}>
              <BoldText
                style={[styles.text, styles.textLineHeight, styles.black]}
              >
                배태형
              </BoldText>
              <RegularText
                style={[styles.text, styles.textLineHeight, styles.gray]}
              >
                배민 프론트엔드 연구소 청소부
              </RegularText>
              <RegularText
                style={[styles.text, styles.textLineHeight, styles.gray]}
              >
                3분 전
              </RegularText>
            </View>
          </View>
          <View style={[theme.justifyContentCenter]}>
            <View
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
            </View>
          </View>
        </View>
        <View style={[theme.mt2, theme.mb2]}>
          <BoldText
            style={[styles.text, styles.black, theme.fontLg, theme.mb2]}
          >
            내 청소구역을 도와줘 !!
          </BoldText>
          <RegularText style={[styles.text, styles.black, theme.fontBase]}>
            작년에 선풍적인 인기를 끌었던 내 청소구역을 도와줘!!
          </RegularText>
        </View>
        <View>
          <CommunityLinkPreview />
        </View>
        <View style={[theme.mt2, theme.alignItemsEnd]}>
          <RegularText style={[styles.text, styles.gray]}>조회 5</RegularText>
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
              0
            </RegularText>
          </View>
          <View
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
          </View>
        </View>
      </View>

      {/* {CommunityPostItem}       */}
      {/* <FlatList
                data={data}
                renderItem={CommunityPostItem}
                keyExtractor={(item) => String(item.id)}
            /> */}
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

export default CommunityPost;
