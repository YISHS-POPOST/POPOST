import { View, StyleSheet, TextInput } from "react-native";
import theme from "../../theme";
import PressButton from "../PressButton";
import Feather from 'react-native-vector-icons/Feather';


const RegistarForm = () => {
    return (
        <View>
            <View style={[styles.inputBorder]}>
                <Feather name="user" size={20} style={theme.ml2} color={"#ccc"}/>    
                <TextInput placeholder="Id" style={[styles.input]} placeholderTextColor={"#ccc"} />
            </View>
            <View style={[styles.inputBorder, theme.mb2]}>
                <Feather name="mail" size={20} style={theme.ml2} color={"#ccc"}/>
                <TextInput placeholder="Email address" style={[styles.input]} placeholderTextColor={"#ccc"} />
            </View>
            <View style={[styles.inputBorder, theme.mb1]}>
                <Feather name="lock" size={20} style={theme.ml2} color={"#ccc"}/>
                <TextInput placeholder="Password" style={[styles.input]} placeholderTextColor={"#ccc"} />
            </View>
            <View>
                <PressButton
                    style={styles.buttonLogin}
                    textStyle={styles.buttonLoginText}
                    content="회원가입"
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
        ...theme.ml1,
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