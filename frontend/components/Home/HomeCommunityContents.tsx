import { View, StyleSheet } from 'react-native';

import theme from '../../theme';
import { BoldText, RegularText } from '../Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeCommunityContents = () => {
    {/*컴포넌트화 2개 들어와야함*/}
    return (
        <View style={[theme.flexDirectionRow, theme.mb1, theme.justifyContentBetween, styles.container, theme.p1]}>
            <RegularText style={[styles.regText, theme.fontBase, theme.pl1]}>실시간 여수정보고 근황...</RegularText>
            <View style={[theme.alignItemsCenter, theme.flexDirectionRow, theme.pr1]}>
                <AntDesign name="like2" size={13} style={styles.state}/>
                <RegularText style={[styles.state]}>69</RegularText>
                <MaterialCommunityIcons name="comment-outline" size={13} style={[styles.state, theme.ml1]}/>
                <RegularText style={[styles.state]}>10</RegularText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: "#444",
    },
    state: {
        color: "#fff",
        marginRight: 3,
    },
    regText: {
        color: "#fff", 
        letterSpacing: -0.5,
    },
})

export default HomeCommunityContents;
