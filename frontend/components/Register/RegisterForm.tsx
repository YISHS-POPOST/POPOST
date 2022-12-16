import { View, StyleSheet, TextInput, Alert } from "react-native";
import theme from "../../theme";
import PressButton from "../PressButton";
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import axios from 'axios';
import { ProfileScreenNavigationProp } from '../../types/NavigateType';
import AlertView from '../AlertView';

interface RegisterUser {
    id:string;
    password:string;
    email:string;
    name:string;
    phone:string
}

const RegistarForm = ({navigation}:ProfileScreenNavigationProp) => {
    const [user, setUser] = useState<RegisterUser>({
        id: "", 
        password: "", 
        email: "", 
        name: "", 
        phone: "",
    });

    const targetInputChange = (key: string, val: string) => {
        setUser(prev => ({
            ...prev,
            [key]: val,
        }));
    };

    const registerAction = async () => {
        const idRegExp = /^[a-zA-z0-9]{4,12}$/;
        const pwRegExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/;
        const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const nameRegExp = /^[가-힣a-zA-Z]{2,15}$/;

        if(!idRegExp.test(user.id)) return AlertView("회원가입", "아이디는 대소문자 또는 영어로 4자에서 12자 사이로 입력해주십시오.");
        if(!pwRegExp.test(user.password)) return AlertView("회원가입", "비밀번호는 대소문자 또는 영어, 특수기호 포함 8자에서 20자 사이로 입력해주십시오.");
        if(!emailRegExp.test(user.email)) return AlertView("회원가입", "이메일 형식으로 입력해주십시오.");
        if(!nameRegExp.test(user.name)) return AlertView("회원가입", "이름은 한글 또는 영어 대소문자만 입력해주십시오.");

        if(!user.id || !user.password || !user.email || !user.name || !user.phone) {
            return Alert.alert('회원가입', '모든 값은 필수입니다.', [{text: "확인"}]);
        }

        await axios
            .post("http://10.0.2.2:3000/users/register", user)
            .then(res => {
                Alert.alert('회원가입', `${res.data.message}`, [{text: "확인", onPress: () => navigation.navigate("Login")}]);
            })
            .catch(err => {
                Alert.alert('회원가입', `${err.response.data.message}`, [{text: "확인"}]);
            })
    }

    return (
        <View>
            <View style={[styles.inputBorder, theme.mb1]}>
                <Feather name="user" size={20} style={theme.ml2} color={"#ccc"}/>    
                <TextInput placeholder="Id" style={[styles.input]} placeholderTextColor={"#ccc"} onChangeText={(text) => targetInputChange("id", text)} />
            </View>
            <View style={[styles.inputBorder, theme.mb1]}>
                <Feather name="lock" size={20} style={theme.ml2} color={"#ccc"}/>
                <TextInput placeholder="Password" style={[styles.input]} placeholderTextColor={"#ccc"} onChangeText={(text) => targetInputChange("password", text)} secureTextEntry={true} />
            </View>
            <View style={[styles.inputBorder, theme.mb1]}>
                <Feather name="mail" size={20} style={theme.ml2} color={"#ccc"}/>
                <TextInput placeholder="Email address" style={[styles.input]} placeholderTextColor={"#ccc"} onChangeText={(text) => targetInputChange("email", text)} />
            </View>
            <View style={[styles.inputBorder, theme.mb1]}>
                <Feather name="tag" size={20} style={theme.ml2} color={"#ccc"}/>
                <TextInput placeholder="name" style={[styles.input]} placeholderTextColor={"#ccc"} onChangeText={(text) => targetInputChange("name", text)} />
            </View>
            <View style={[styles.inputBorder, theme.mb1]}>
                <Feather name="smartphone" size={20} style={theme.ml2} color={"#ccc"}/>
                <TextInput placeholder="phone" style={[styles.input]} placeholderTextColor={"#ccc"} onChangeText={(text) => targetInputChange("phone", text)} />
            </View>
            <View>
                <PressButton
                    style={styles.buttonLogin}
                    textStyle={styles.buttonLoginText}
                    content="회원가입"
                    onPress={registerAction}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputBorder : {
        borderRadius: 15,
        backgroundColor: "#fff",
        ...theme.mb2,
        ...theme.flexDirectionRow, 
        ...theme.alignItemsCenter,
        borderWidth : 1.4,
        borderColor : '#ddd',
    },
    input: {
        height: 60,        
        letterSpacing: -0.5, 
        ...theme.fontWeightBold,
        ...theme.fontBase,
        color: "#000",
        width : '100%'
        
    },
    buttonLogin: {
        backgroundColor: theme.colors.purple,
      },
    buttonLoginText: {
    color: "#fff",
    },
});

export default RegistarForm;