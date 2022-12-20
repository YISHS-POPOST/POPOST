import { StyleSheet, TouchableOpacity, View } from "react-native";
import theme from "../../theme";
import Octicons from "react-native-vector-icons/Octicons";
import { BoldText } from "../../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { StateInterface } from "../../src/type/state";
import axios from "axios";
import { API_URL } from "@env";
const ProfileEditSuccessScreen = () => {
  const navigation = useSelector((state: StateInterface) => state.navigation);
  const profile = useSelector((state: StateInterface) => state.profile);

  const prevAction = () => {
    navigation.navigate("ProfileEditIntroduce");
  };

  const successAction = async () => {
    const formData = new FormData();

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
    };

    formData.append("data", JSON.stringify(profileData));
    
    await axios
      .post(API_URL + "/users/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
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
      <View
        style={[
          styles.container,
          theme.alignItemsCenter,
          theme.justifyContentCenter,
          theme.flexDirectionColumn,
        ]}
      >
        <Octicons name="check-circle" color={theme.colors.purple} size={100} />
        <View
          style={[
            theme.flexDirectionColumn,
            theme.mt3,
            theme.alignItemsCenter,
            theme.justifyContentCenter,
          ]}
        >
          <BoldText style={[styles.introduce, theme.fontXxxl]}>
            완료를 누르시면
          </BoldText>
          <BoldText style={[styles.introduce, theme.fontXxxl]}>
            변동된 값이 적용됩니다!
          </BoldText>
        </View>
      </View>
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
