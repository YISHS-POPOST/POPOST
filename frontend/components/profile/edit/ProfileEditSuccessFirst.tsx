import { View, StyleSheet } from "react-native";
import theme from "../../../theme";
import Octicons from "react-native-vector-icons/Octicons";
import { BoldText } from "../../Text";

const ProfileEditSuccessFirst = () => {
  return (
    <View
      style={[
        styles.container,
        theme.alignItemsCenter,
        theme.justifyContentCenter,
        theme.flexDirectionColumn,
      ]}
    >
      <Octicons name="fold-down" color={theme.colors.purple} size={100} />
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
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  introduce: {
    color: "#444",
  },
});

export default ProfileEditSuccessFirst;
