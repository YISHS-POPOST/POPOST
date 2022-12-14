import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import theme from '../../theme';

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
                <TextInput placeholder='링크는 하나만 추가 가능합니다.' style={[theme.fontWeightRegular, theme.fontBase, styles.contentsInput, styles.text]} placeholderTextColor={"#adadad"} multiline ={true} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        letterSpacing: -0.5,
        color: "#000",
    },
    span: {
        backgroundColor: "#dfdfdf",
        height: 1,
        width: "100%",
    },
    titleInput: {
        height: 100,
    },
    contentsInput: {
        height: 500,
        textAlignVertical: "top"
    },
    linkInput: {
        height: 100,
        textAlignVertical: "top"
    },
});

export default CommunityWriteContents;