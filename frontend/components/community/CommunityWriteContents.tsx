import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import theme from '../../theme';
import { BoldText } from '../../components/Text';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

const CommunityWriteContents = () => {    
    return (
        <View>
            <View style={theme.mt2}>
                <TextInput placeholder='제목 추가' style={[theme.fontWeightBold, theme.fontXl, styles.text]} placeholderTextColor={"#adadad"} multiline ={true} />
            </View>
            <View style={styles.span}></View>
            <View>
                <TextInput placeholder='나누고 싶은 생각을 적어주세요.' style={[theme.fontWeightRegular, theme.fontBase, styles.contentsInput, styles.text]} placeholderTextColor={"#adadad"} multiline ={true} />
            </View>
            <View style={styles.span}></View>
            <View>
                <TextInput placeholder='링크' style={[theme.fontWeightRegular, theme.fontBase, styles.contentsInput, styles.text]} placeholderTextColor={"#adadad"} multiline ={true} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        letterSpacing: -0.5,
    },
    span: {
        backgroundColor: "#dfdfdf",
        height: 1,
        width: "100%",
    },
    titleInput: {

    },
    contentsInput: {
        height: 400, 
        textAlignVertical: "top"
    },
    linkInput: {
        height: 400, 
        textAlignVertical: "top"
    },
});

export default CommunityWriteContents;