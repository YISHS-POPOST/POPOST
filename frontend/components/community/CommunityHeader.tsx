import { View, StyleSheet, TextInput } from 'react-native';
import theme from '../../theme';
import { BoldText } from '../../components/Text';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

const CommunityHeader = () => {
    return (
        <View style={[styles.container, theme.justifyContentBetween, theme.flexDirectionRow]}>
            {/* <BoldText style={[theme.fontXxl, styles.textContainer]}>로고</BoldText> */}
            <View style={[styles.inputBox, theme.flexDirectionRow, theme.alignItemsCenter]}>
                <Feather name='search' size={19} style={[styles.searchIcon, theme.ml2]}/>
                <TextInput placeholder="사람, 키워드로 검색" style={[styles.input]} placeholderTextColor={"#5e5e5e"} />
            </View>
            <View style={[theme.justifyContentCenter, theme.mr1]}>
                <Octicons name='comment' size={theme.headerIconSize} style={styles.msgIcon}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        textAlign: "center",
        heigth: 150,
    },
    input: {
        height: 40,
        fontSize: 12,
        color: "#000",
        width: 290,
    },
    textContainer: {
        letterSpacing: .5,
        color: "#333",
        textAlign: "center",
    },
    inputBox : {
        width: 330,
        backgroundColor: "#f1f1f1",
        borderRadius: 5,
    },
    searchIcon: {
        color: "#5e5e5e",
    },
    msgIcon: {
        color: "#333",
    },
})

export default CommunityHeader;