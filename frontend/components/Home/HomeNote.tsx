import { View, StyleSheet } from 'react-native';

import theme from '../../theme';
import { BoldText, RegularText } from '../../components/Text';

const HomeNote = () => {
    return (
        <View style={[styles.container, theme.p3]}>
            <RegularText style={[styles.regText, theme.fontBase]}>현재 여수시의 날씨는</RegularText>
            <BoldText style={[theme.fontTitleSize, styles.boldText]}>맑음 입니다!</BoldText>
            <RegularText style={[styles.smallText, theme.fontSmall]}>12월 12일 월요일 오후 3:43 </RegularText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.softBlue,
        height: 150,
        borderRadius: 15,
    },
    regText: {
        color: "#000", 
        letterSpacing: -0.5,
    },
    boldText: {
        color: "#000", 
        letterSpacing: -0.5,
        lineHeight: 35,
    },
    smallText: {
        color: "#999999", 
        letterSpacing: -0.5,
        flex: 3, 
        ...theme.justifyContentEnd,
    }
});

export default HomeNote;