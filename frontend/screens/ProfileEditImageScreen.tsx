import { StyleSheet, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { BoldText, RegularText } from "../components/Text";
import theme from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileEditImageScreen = () => {
  return (
    <View
      style={[
        styles.container,
        theme.justifyContentBetween,
        theme.alignItemsCenter,
      ]}
    >
      <View style={[styles.container, theme.alignItemsCenter]}>
        <View
          style={[
            styles.cameraView,
            theme.mt5,
            theme.justifyContentCenter,
            theme.alignItemsCenter,
          ]}
        >
          <Feather name="user" color="#aaa" size={100} />
        </View>
        <View style={[theme.mt2, theme.mb2, theme.alignItemsCenter]}>
          <RegularText style={[styles.text, theme.fontBase]}>
            프로필 사진을 선택해주세요.
          </RegularText>
          <RegularText style={[styles.text, theme.fontBase]}>
            (jpg , jpeg , png)파일로 선택가능.
          </RegularText>
        </View>
        <View
          style={[
            theme.alignItemsCenter,
            theme.justifyContentBetween,
            theme.flexDirectionRow,
          ]}
        >
          <TouchableOpacity
            style={[
              styles.buttonBase,
              styles.selfBtn,
              theme.pt2,
              theme.pb2,
              theme.alignItemsCenter,
              theme.flexDirectionRow,
              theme.justifyContentCenter,
            ]}
          >
            <AntDesign name="camerao" color="#fff" size={30} />
            <BoldText style={[{ color: "#fff" }, theme.fontLg, theme.ml1]}>
              직접찍기
            </BoldText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonBase,
              styles.pickBtn,
              theme.pt2,
              theme.pb2,
              theme.alignItemsCenter,
              theme.flexDirectionRow,
              theme.justifyContentCenter,
              theme.ml2,
            ]}
          >
            <Feather name="image" color="#fff" size={30} />
            <BoldText style={[{ color: "#fff" }, theme.fontLg, theme.ml1]}>
              사진선택
            </BoldText>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView
        style={[
          theme.mb5,
          styles.nextBtn,
          theme.sectionBorderRadius,
          theme.pt2,
          theme.pb2,
          theme.alignItemsCenter,
          theme.justifyContentCenter,
        ]}
      >
        <TouchableOpacity
          style={[
            styles.nextBtnContent,
            theme.justifyContentCenter,
            theme.alignItemsCenter,
            theme.sectionBorderRadius,
            theme.pt2,
            theme.pb2,
          ]}
        >
          <BoldText style={[styles.nextTitle, theme.fontXl]}>다음으로</BoldText>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraView: {
    width: 250,
    height: 250,
    ...theme.sectionBorderRadius,
    backgroundColor: theme.colors.backgroundWhite,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  text: {
    color: "#777",
  },
  buttonBase: {
    flex: 1,
    ...theme.sectionBorderRadius,
  },
  selfBtn: {
    backgroundColor: "#666",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  pickBtn: {
    backgroundColor: theme.colors.purple,
  },
  nextBtn: {
    width: "100%",
  },
  nextBtnContent: {
    width: "100%",
    textAlign: "center",
    backgroundColor: theme.colors.blue,
  },
  nextTitle: {
    color : '#fff',
  },
});

export default ProfileEditImageScreen;
