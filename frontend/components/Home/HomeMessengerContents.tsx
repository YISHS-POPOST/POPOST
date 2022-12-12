import { View, StyleSheet, Image } from 'react-native';

import theme from '../../theme';

import { BoldText, RegularText } from '../Text';

const HomeMessengerContents = () => {
    return (
        <View style={[theme.flexDirectionRow]}>
            <Image source={require('../../assets/image/profile/test_profile.jpg')} style={[styles.image]} />
            <View style={[theme.justifyContentBetween, theme.flexDirectionRow]}>
                <View style={[theme.ml2, theme.mt1]}>
                    <RegularText style={[styles.nameText, theme.fontSmall]}>최시우스 주니오르</RegularText>
                    <RegularText style={[styles.contentText, theme.fontSmall]}>메시지 좀 봐줄래 병123신아 ?...</RegularText>
                </View>
                <RegularText style={[styles.timeText, theme.fontSmall, theme.alignItemsEnd]}>19분 전</RegularText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    timeText: {
        letterSpacing: -0.5,
        color: "#8d8d8d",
    },
    nameText: {
        letterSpacing: -0.5,
        color: "#000",
        lineHeight: 17,
    },
    contentText: {
        letterSpacing: -0.5,
        color: "#8d8d8d",
        lineHeight: 17,
    },
    image : {
        width : 50,
        height : 50,    
        borderRadius: 100,
    }
})

export default HomeMessengerContents;