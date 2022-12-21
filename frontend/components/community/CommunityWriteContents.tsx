import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from 'react-redux';

import theme from '../../theme';
import { setWriteData } from '../../src/actions/communityAction';
import { AppDispatch } from '../../src/stores';
import { CommunityType } from '../../src/type/commuity';
import { StateInterface } from '../../src/type/state';

const CommunityWriteContents = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    const [community, setCommunity] = useState<CommunityType>({
        title: "",
        content: "",
        link: "",
        user_id: "",
    });

    const targetInputChange = async (key: string, val: string) => {
        setCommunity(prev => ({
            ...prev,
            [key]: val,
        }));
    };

    useEffect(() => {
        dispatch(setWriteData(community));
    }, [community])

    return (
        <ScrollView>
            <View style={theme.mt2}>
                <TextInput placeholder='제목 추가' style={[theme.fontWeightBold, theme.fontXl, styles.text]} placeholderTextColor={"#adadad"} multiline={true} onChangeText={(text) => {targetInputChange("title", text)}}/>
            </View>
            <View style={styles.span}></View>
            <View>
                <TextInput placeholder='나누고 싶은 생각을 적어주세요.' style={[theme.fontWeightRegular, theme.fontBase, styles.contentsInput, styles.text]} placeholderTextColor={"#adadad"} multiline = {true} onChangeText={(text) => targetInputChange("content", text)} />
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