import { View, StyleSheet, TextInput } from "react-native";
import theme from "../../theme";
import PressButton from "../PressButton";
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import axios from 'axios';

type RegisterUser = {
    id:string;
    password:string;
    email:string;
    name:string;
    phone:string
}

const RegistarForm = () => {
    const [user, setUser] = useState<RegisterUser>({id: "", password: "", email: "", name: "", phone: ""});

    const registerAction = () => {
        axios.post("http://localhost:3000/register", user).then((res:any) => {
            
        })
    }
    
    const targetInputChange = (key: string, val: string) => {
        setUser(prev => ({
          ...prev,
          [key]: val,
        }));
    };

    console.log(user);

    return (
        <View>
            <View style={[styles.inputBorder, theme.mb1]}>
                <Feather name="user" size={20} style={theme.ml2} color={"#ccc"}/>    
                <TextInput placeholder="Id" style={[styles.input]} placeholderTextColor={"#ccc"} onChangeText={(text) => targetInputChange("id", text)} />
            </View>
            <View style={[styles.inputBorder, theme.mb1]}>
                <Feather name="lock" size={20} style={theme.ml2} color={"#ccc"}/>
                <TextInput placeholder="Password" style={[styles.input]} placeholderTextColor={"#ccc"} onChangeText={(text) => targetInputChange("password", text)} />
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