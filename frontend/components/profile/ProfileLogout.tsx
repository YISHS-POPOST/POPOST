import { View, StyleSheet, Alert } from "react-native";
import PressButton from "../PressButton";
import theme from "../../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";

const ProfileLogout = ({ navigation }: ProfileScreenNavigationProp) => {
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user_id");
      Alert.alert("로그아웃", "로그아웃이 완료되었습니다.");
      navigation.navigate("SplashScreen");
      return true;
    } catch (exception) {
      return false;
    }
  };

  return (
    <View
      style={[
        theme.container,
        theme.justifyContentCenter,
        theme.alignItemsCenter,
        theme.mb2,
      ]}
    >
      <PressButton
        style={[styles.pressBtn]}
        textStyle={[theme.fontWeightBold, styles.pressBtnText, theme.fontXl]}
        content="로그아웃"
        onPress={logout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pressBtn: {
    backgroundColor: theme.colors.red,
    width: 200,
  },
  pressBtnText: {
    color: "#fff",
  },
});

export default ProfileLogout;