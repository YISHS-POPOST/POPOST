import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import theme from "../../../theme";
import { useSelector } from "react-redux";
import { StateInterface } from "../../../src/type/state";
import { BoldText } from "../../Text";

// 제목
const ProfileEditHeader = (navigate?: string) => {
  const navigation = useSelector((state: StateInterface) => state.navigation);
  return (
    <View
      style={[
        theme.justifyContentCenter,
        theme.headerHeight,
        theme.alignItemsCenter,
      ]}
    >
      <Pressable
        style={[styles.prevBtn]}
        onPress={() => {
          navigate ? navigation.navigate(navigate) : navigation.pop();
        }}
      >
        <Entypo
          name="chevron-left"
          color={theme.colors.purple}
          size={theme.headerIconSize}
          style={[theme.alignItemsCenter, theme.justifyContentCenter]}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    flex: 1,
  },
  title: {
    height: "100%",
  },
  prevBtn: {
    left: 0,
  },
});

export default ProfileEditHeader;
