import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import { BoldText, RegularText } from '../../components/Text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeMessengerContents from './HomeMessengerContents';


const HomeMessenger = () => {
    return (
        <View style={[styles.container, theme.p4, theme.mt3]}>
            <View style={[theme.justifyContentBetween, theme.flexDirectionRow]}>
                <BoldText style={[styles.boldText, theme.fontXl, theme.mb2]}>메신저</BoldText>
                <View style={[theme.flexDirectionRow, theme.justifyContentEnd, theme.alignItemsCenter, theme.mb2]}>
                    <Icon name="keyboard-arrow-right" size={15} style={[styles.nextText]}/>
                    <RegularText style={[styles.nextText, theme.fontSmall]}>더보기</RegularText>
                </View>
            </View>
            <View style={[theme.justifyContentBetween, styles.subContainer]}>
                <HomeMessengerContents />
                <HomeMessengerContents />
                <HomeMessengerContents />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 15,
        height: 300,
    },
    subContainer: {
        height: 190,
    },
    boldText: {
        color: "#000", 
        letterSpacing: -0.5,
        lineHeight: 35, 
    },
    nextText: {
        color: "#999", 
        letterSpacing: -0.5,
    },
});

export default HomeMessenger;
