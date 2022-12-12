import { View, StyleSheet } from 'react-native';

import theme from '../../theme';
import { BoldText, RegularText } from '../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeCommunityContents = () => {
    {/*컴포넌트화 2개 들어와야함*/}
    return (
        <View style={[theme.flexDirectionRow, theme.mb1, theme.justifyContentBetween]}>
            <RegularText style={[styles.regText, theme.fontBase]}>제목 | 실시간 여수정보고 근황...</RegularText>
            <View style={[theme.alignItemsCenter, theme.flexDirectionRow]}>
                <AntDesign name="like2" size={13} style={styles.state}/>
                <RegularText style={[styles.state]}>69</RegularText>
                <MaterialCommunityIcons name="comment-outline" size={13} style={[styles.state, theme.ml2]}/>
                <RegularText style={[styles.state]}>10</RegularText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    state: {
        color: "#777",
    },
    regText: {
        color: "#555", 
        letterSpacing: -0.5,
    },
})

export default HomeCommunityContents;
