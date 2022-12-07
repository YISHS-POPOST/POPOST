import { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, Button, TouchableOpacity, Text, Alert } from "react-native";

import theme from "../../theme";
import {BoldText} from "../../components/Text";


const RegistarForm = () => {
    const [register, setRegister] = useState({id: "", email: "", password: ""});

    const RegisterAction = () => {
        return Alert.alert("Register", "성공적으로 회원가입하셨습니다!", [{text : "확인"}]);
    }

    return (
        <>
            <View style={styles.inputBorder}>
                <TextInput placeholder="Id" style={[theme.mt5, theme.fontLg]} />
            </View>
            <View style={styles.inputBorder}>
                <TextInput placeholder="Email" style={[theme.mt5, theme.fontLg]} />
            </View>
            <View style={styles.inputBorder}>
                <TextInput placeholder="Password" style={[theme.mt5, theme.fontLg]} />
            </View>
            <TouchableOpacity style={[styles.button, theme.mt5, theme.alignItemsCenter]} activeOpacity={0.8} onPress={RegisterAction}>
                <BoldText style={{color: theme.colors.blue}}>SIGN UP</BoldText>
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

export default RegistarForm;