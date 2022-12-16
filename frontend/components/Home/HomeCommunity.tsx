import { View, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../../theme';
import { BoldText, RegularText } from '../Text';
import HomeCommunityContents from './HomeCommunityContents'

const HomeCommunity = () => {
    return (
        <View style={[styles.container, theme.p4, theme.mt3]}>
            <BoldText style={[styles.titleText, theme.fontXl, theme.mb2]}>오늘의 핫 커뮤니티 게시글</BoldText>
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
        height: 180,
        borderRadius: 15,
    },
    span: {
        width: "100%",
        height: 1,
        backgroundColor: "#999",
    },
    titleText: {
        color: "#000", 
        letterSpacing: -0.5,
    },
})

export default HomeCommunity;