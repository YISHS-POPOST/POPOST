import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from 'react-redux';

import theme from '../../theme';
import { setWriteData } from '../../src/actions/communityAction';

interface CommunityType {
    title: string;
    content: string;
    link: string;
    user_id: string;
}

const CommunityWriteContents = () => {
    const dispatch = useDispatch();
    const writeData = useSelector((state:any ) => state.writeData);

    const [community, setCommunity] = useState<CommunityType>({
        title: "",
        content: "",
        link: "",
        user_id: "",
    });

    const targetInputChange = (key: string, val: string) => {
        setCommunity(prev => ({
            ...prev,
            [key]: val,
        }));
        dispatch(setWriteData(community));
    };

    console.log(writeData);

    return (
        <ScrollView>
            <View style={theme.mt2}>
                <TextInput placeholder='제목 추가' style={[theme.fontWeightBold, theme.fontXl, styles.text]} placeholderTextColor={"#adadad"} multiline={true} onChangeText={(text) => targetInputChange("title", text)}/>
            </View>
            <View style={styles.span}></View>
            <View>
                <TextInput placeholder='나누고 싶은 생각을 적어주세요.' style={[theme.fontWeightRegular, theme.fontBase, styles.contentsInput, styles.text]} placeholderTextColor={"#adadad"} multiline ={true} onChangeText={(text) => targetInputChange("content", text)} />
            </View>
            <View style={styles.span}></View>
            <View>
                <TextInput placeholder='링크는 하나만 추가 가능합니다.' style={[theme.fontWeightRegular, theme.fontBase, styles.linkInput, styles.text]} placeholderTextColor={"#adadad"} multiline ={true} onChangeText={(text) => targetInputChange("link", text)} />
            </View>
        </ScrollView>
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