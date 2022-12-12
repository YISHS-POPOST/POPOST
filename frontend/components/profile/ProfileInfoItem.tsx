import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../Text";
import Feather from "react-native-vector-icons/Feather";
import { IconProps } from "react-native-vector-icons/Icon";

// 아이콘 , 타이틀 , 계



interface InfoItem {
  icon: IconProps;
  title: string;
  total: number;
  unit: string;
}

const ProfileInfoItem = ({ icon, title, total, unit }: InfoItem) => {
  return (
    <View
      style={[
        styles.infoItem,
        theme.pt3,
        theme.pb3,
        theme.pl2,
        theme.pr2,
        theme.flexDirectionRow,
        theme.justifyContentBetween,
        theme.alignItemsCenter,
        theme.sectionBorderRadius,
      ]}
    >
      <View style={[theme.flexDirectionRow, theme.alignItemsCenter]}>
        <Feather
          name={icon}
          color={theme.colors.blue}
          size={25}
          style={[theme.p1]}
        />
        <BoldText style={[theme.fontXl, styles.infoTitle]}>{title}</BoldText>
      </View>
      <RegularText style={[theme.fontLg]}>{`${total}${unit}`}</RegularText>
    </View>
  );
};

const styles = StyleSheet.create({
  infoItem: {
    backgroundColor: "#fff",
    height: 80,
  },
  infoTitle: {
    color: "#333",
  },
});

export default ProfileInfoItem;
