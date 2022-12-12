import { View, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../../theme';
import { BoldText, RegularText } from '../Text';
import HomeCommunityContents from './HomeCommunityContents'

const HomeCommunity = () => {
    return (
        <View style={[styles.container, theme.p4, theme.mt3]}>
            <RegularText style={[styles.titleText, theme.fontXl]}>오늘의 "핫" 커뮤니티 게시글</RegularText>
            <View style={[styles.span, theme.mt1, theme.mb2]}></View>
            <View>
                {/* 나중에 컴포넌트화 2개 들어와야함*/}
                <HomeCommunityContents />
                <HomeCommunityContents />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: 160,
        borderRadius: 15,
    },
    span: {
        width: "100%",
        height: 1,
        backgroundColor: "#999",
    },
    state: {
        color: "#777",
    },
    titleText: {
        color: "#000", 
        letterSpacing: -0.5,
    },
    regText: {
        color: "#555", 
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