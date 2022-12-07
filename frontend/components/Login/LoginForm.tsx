import { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, Button, TouchableOpacity, Text, Alert } from "react-native";

import theme from "../../theme";
import {BoldText} from "../Text";


const LoginForm = () => {
    const [register, setRegister] = useState({id: "", email: "", password: ""});

    const LoginAction = () => {
        return Alert.alert("Login", "성공적으로 로그인하셨습니다!", [{text : "확인"}]);
    }

    return (
        <>
            <View style={styles.inputBorder}>
                <TextInput placeholder="Id" style={[theme.mt5, theme.fontLg]} />
            </View>
            <View style={styles.inputBorder}>
                <TextInput placeholder="Password" style={[theme.mt5, theme.fontLg]} />
            </View>
            <TouchableOpacity style={[styles.button, theme.mt5, theme.alignItemsCenter]} activeOpacity={0.8} onPress={LoginAction}>
                <BoldText style={{color: theme.colors.blue}}>LOG IN</BoldText>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    inputBorder : {
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.blue,
        borderStyle: "solid",
    },
    button: {
        borderRadius: 4,
        backgroundColor: theme.colors.softBlue,
        padding: 10
    },
});

export default LoginForm;