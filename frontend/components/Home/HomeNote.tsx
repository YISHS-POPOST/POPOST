import { View, StyleSheet } from 'react-native';

import theme from '../../theme';
import { BoldText, RegularText } from '../Text';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeNote = () => {
    return (
        <View style={[styles.container, theme.p4, theme.mt3, theme.mb3, theme.flexDirectionColumn, theme.justifyContentBetween]}>
            <View style={[styles.informationContainer, theme.flexDirectionColumn, theme.justifyContentBetween]}>
                <View>
                    <RegularText style={[styles.regText, theme.fontBase]}>쪽지를 생성한 개수</RegularText>
                    <BoldText style={[theme.fontXxxl, styles.boldText]}>"6" 개 입니다.</BoldText>
                </View>
                <View>
                    <RegularText style={[styles.regText, theme.fontBase]}>다른 유저가 쪽지를 펼쳐본 횟수</RegularText>
                    <BoldText style={[theme.fontXxxl, styles.boldText]}>"10" 번 입니다.</BoldText>
                </View>
                <View>
                    <RegularText style={[styles.regText, theme.fontBase]}>다른 유저의 쪽지를 펼쳐본 횟수</RegularText>
                    <BoldText style={[theme.fontXxxl, styles.boldText]}>"1" 번 입니다.</BoldText>
                </View>
            </View>
            <View style={[theme.flexDirectionRow, theme.justifyContentEnd, theme.alignItemsCenter]}>
                <Icon name="keyboard-arrow-right" size={15} style={[styles.nextText]}/>
                <RegularText style={[styles.nextText, theme.fontSmall]}>쪽지 정보 상세보기</RegularText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: 280,
        borderRadius: 15,
    },
    informationContainer: {
        height: 180,
    },
    regText: {
        color: "#555", 
        letterSpacing: -0.5,
    },
    nextText: {
        color: "#999", 
        letterSpacing: -0.5,
    },
    boldText: {
        color: "#000", 
        letterSpacing: -0.5,
        lineHeight: 30, 
    },
});

export default HomeNote;