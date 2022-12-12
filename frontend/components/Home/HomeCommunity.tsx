import { View, StyleSheet } from 'react-native';

import theme from '../../theme';
import { BoldText, RegularText } from '../../components/Text';

const HomeCommunity = () => {
    return (
        <View style={[styles.container, theme.p4, theme.mt3, theme.justifyContentBetween]}>
            <RegularText style={[styles.regText, theme.fontLg]}>오늘의 "핫" 커뮤니티 게시글!</RegularText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
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
    },
    smallText: {
        color: "#a0a0a0", 
        letterSpacing: -0.5,
        ...theme.justifyContentEnd,
        textAlign : 'right'
    }
})

export default HomeCommunity;