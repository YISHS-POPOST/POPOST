import { StyleSheet, TouchableOpacity, View, Alert } from "react-native";
import theme from "../../theme";
import { BoldText } from "../../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../src/type/state";
import axios from "axios";
import { API_URL } from "@env";
import { useState } from "react";
import { loginAction } from "../../assets/fnc/loginAction";
import ProfileEditSuccessFirst from "../../components/profile/edit/ProfileEditSuccessFirst";
import ProfileEditSuccessLoading from "../../components/profile/edit/ProfileEditSuccessLoading";
import ProfileEditSuccessComplete from "../../components/profile/edit/ProfileEditSuccessComplete";
import ProfileEditSuccessError from "../../components/profile/edit/ProfileEditSuccessError";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppDispatch } from "../../src/stores";

const ProfileEditSuccessScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<"success" | "error" | "yet">("yet");
  const navigation = useSelector((state: StateInterface) => state.navigation);
  const profile = useSelector((state: StateInterface) => state.profile);
  const users = useSelector((state: StateInterface) => state.users);
  const dispatch = useDispatch<AppDispatch>();
  const prevAction = () => {
    navigation.navigate("ProfileEditIntroduce");
  };

  const successAction = async () => {
    const formData = new FormData();
    setLoading(true);
    if (profile.image) {
      const imageSplit = profile.image.path.split("/");
      const imageName = imageSplit[imageSplit.length - 1];
      const imageFile = {
        uri: profile.image.path,
        type: profile.image.mime,
        name: imageName,
      };
      formData.append("image", imageFile);
    } else {
      formData.append("image", null);
    }

    const profileData = {
      name: profile.name,
      phone: profile.phone,
      email: profile.email,
      nickname: profile.nickname,
      introduce: profile.introduce,
      userId: users.id,
    };

    formData.append("data", JSON.stringify(profileData));

    await axios
      .post(API_URL + "/users/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(async res => {
        // 메시지 띄우기 , 로딩 , 완료 화면 구현 , 유저 값 다시 넣기 , 프로필 띄우기
        const { status } = res;
        if (status === 200) {
          setLoading(false);
          setSuccess("success");
          const userId = await AsyncStorage.getItem("user_id").then(
            value => value
          );
          const userPassword = await AsyncStorage.getItem("user_password").then(
            value => value
          );
          if (userId && userPassword) {
            await loginAction(dispatch, { id: userId, password: userPassword });
            return navigation.navigate("profile");
          }
        }
      })
      .catch(err => {
        setSuccess("error");
      });
    setLoading(false);
    // navigation.navigate("profile");
  };

  return (
    <View
      style={[
        theme.container,
        theme.justifyContentCenter,
        theme.alignItemsCenter,
      ]}
    >
      {success === "success" ? (
        <ProfileEditSuccessComplete />
      ) : success === "error" ? (
        <ProfileEditSuccessError />
      ) : success === "yet" ? (
        <ProfileEditSuccessFirst />
      ) : loading === true ? (
        <ProfileEditSuccessLoading />
      ) : (
        <ProfileEditSuccessFirst />
      )}
      <SafeAreaView style={[{ width: "100%" }]}>
        <TouchableOpacity
          style={[
            styles.buttonBase,
            theme.sectionBorderRadius,
            theme.mt2,
            theme.mb2,
            theme.justifyContentCenter,
            theme.alignItemsCenter,
            styles.prevButton,
          ]}
          onPress={prevAction}
        >
          <BoldText
            style={[theme.fontLg, styles.buttonText, theme.pt2, theme.pb2]}
          >
            이전으로
          </BoldText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonBase,
            theme.sectionBorderRadius,
            theme.mb2,
            theme.justifyContentCenter,
            theme.alignItemsCenter,
            styles.successButton,
          ]}
          onPress={successAction}
        >
          <BoldText
            style={[theme.fontLg, styles.buttonText, theme.pt2, theme.pb2]}
          >
            완료
          </BoldText>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  introduce: {
    color: "#444",
  },
  buttonBase: {
    width: "100%",
    backgroundColor: "#333",
  },
  buttonText: {
    color: "#fff",
  },
  successButton: {
    backgroundColor: theme.colors.purple,
  },
  prevButton: {
    backgroundColor: "#666",
  },
});

export default ProfileEditSuccessScreen;
