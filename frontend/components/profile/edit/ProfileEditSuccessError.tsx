import { View, StyleSheet } from "react-native";
import theme from "../../../theme";
import Octicons from "react-native-vector-icons/Octicons";
import { BoldText } from "../../Text";

const ProfileEditSuccessError = () => {
  return (
    <View
      style={[
        styles.container,
        theme.alignItemsCenter,
        theme.justifyContentCenter,
        theme.flexDirectionColumn,
      ]}
    >
      <Octicons name="shield" color={theme.colors.purple} size={100} />
      <View
        style={[
          theme.flexDirectionColumn,
          theme.mt3,
          theme.alignItemsCenter,
          theme.justifyContentCenter,
        ]}
      >
        <BoldText style={[styles.introduce, theme.fontXxxl]}>
          오류가 발생했습니다.
        </BoldText>
        <BoldText style={[styles.introduce, theme.fontXxxl]}>
          나중에 다시 시도해주세요.
        </BoldText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  introduce: {
    color: "#444",
  },
});

export default ProfileEditSuccessError;
