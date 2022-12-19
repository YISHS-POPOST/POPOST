import { StyleSheet, TouchableOpacity, View , Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { BoldText, RegularText } from "../../components/Text";
import theme from "../../theme";
import ProfileEditNextButton from "../../components/profile/edit/ProfileEditNextButton";
import { useState } from "react";
import {
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";

const ProfileEditImageScreen = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: "photo",
      cameraType: "back",
      maxWidth: 500,
      maxHeight: 500,
      includeBase64: true,
    });
    if (!result.assets) return;
    const { uri } = result.assets[0];
    if (!uri) return;
    setImageUri(uri);
  };

  const openLibrary = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      maxWidth: 500,
      maxHeight: 500,
      includeBase64 : true,
    });
    if (!result.assets) return;
    // reuslt.asset.uri = 주소 값
    const { uri } = result.assets[0];
    if (!uri) return;
    setImageUri(uri);
  };


  return (
    <View
      style={[
        styles.container,
        theme.justifyContentBetween,
        theme.alignItemsCenter,
      ]}
    >
      <View
        style={[
          styles.container,
          theme.alignItemsCenter,
          theme.justifyContentCenter,
        ]}
      >
        <View
          style={[
            styles.cameraView,
            theme.mt5,
            theme.justifyContentCenter,
            theme.alignItemsCenter,

          ]}
        >
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              style={[{ width: "100%", height: "100%" }]}
            />
          ) : (
            <Feather name="user" color="#aaa" size={100} />
          )}
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
            theme.mt5,
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
            onPress={openCamera}
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
            onPress={openLibrary}
          >
            <Feather name="image" color="#fff" size={30} />
            <BoldText style={[{ color: "#fff" }, theme.fontLg, theme.ml1]}>
              사진선택
            </BoldText>
          </TouchableOpacity>
        </View>
      </View>
      <ProfileEditNextButton navigate="ProfileEditName" />
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
    overflow : 'hidden'
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
});

export default ProfileEditImageScreen;
