import { View, StyleSheet } from 'react-native';

import theme from '../../theme';
import { BoldText, RegularText } from '../../components/Text';
import Icon from 'react-native-vector-icons/Feather';

const HomeNote = () => {
    return (
        <View style={[styles.container, theme.p4, theme.mt3, theme.justifyContentBetween]}>
            <View style={[theme.justifyContentBetween, theme.flexDirectionRow]}>
                <View>
                    <RegularText style={[styles.regText, theme.fontLg]}>현재 여수시 여서동의 날씨는</RegularText>
                    <BoldText style={[theme.fontTitleSize, styles.boldText]}>"맑음" 입니다!</BoldText>
                </View>
                <Icon name="sun" size={35} color={"#ffaf01"} style={styles.icon} />
            </View>
            <View style={[theme.justifyContentBetween, theme.flexDirectionRow]}>
                <RegularText style={[styles.smallText, theme.fontSmall]}>10° / 3°, 체감온도 2°</RegularText>
                <RegularText style={[styles.smallText, theme.fontSmall]}>12월 12일 월요일 오후 3:43 기준</RegularText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: 150,
        borderRadius: 15,
    },
    icon: {
        width: 40,
        lineHeight: 40,
    },
    regText: {
        color: "#000", 
        letterSpacing: -0.5,
    },
    boldText: {
        color: "#000", 
        letterSpacing: -0.5,
    },
    smallText: {
        color: "#a0a0a0", 
        letterSpacing: -0.5,
        ...theme.justifyContentEnd,
        textAlign : 'right'
    }
});

export default HomeNote;