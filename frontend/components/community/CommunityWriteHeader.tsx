import { View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import Entypo from "react-native-vector-icons/Entypo";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import { BoldText } from '../../components/Text';

const CommunityWriteHeader = (navigation: ProfileScreenNavigationProp) => {
    return (
        <View style={[theme.justifyContentBetween, theme.flexDirectionRow, theme.alignItemsCenter, styles.container]}>
          <View style={[theme.flexDirectionRow, theme.alignItemsCenter]}>
            <Entypo name="chevron-left" onPress={() => navigation.pop()} size={30} color={theme.colors.purple} />
            <BoldText style={[styles.text, theme.fontXl, theme.ml1]}>글쓰기</BoldText>
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <BoldText style={[styles.button, theme.pt1, theme.pb1, theme.pr2, theme.pl2, theme.mr4]}>저장</BoldText>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        backgroundColor: theme.colors.softBlue,
        color: theme.colors.blue,
        borderRadius: 5,
    },
    text: {
      color: "#000",
      letterSpacing: -0.5,
    },
});

export default CommunityWriteHeader;