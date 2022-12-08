import { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable } from "react-native";

import theme from "../../theme";
import {BoldText, RegularText} from "../../components/Text";


const RegistarForm = () => {
    return (
        <View>
            <View style={[styles.inputBorder, theme.mb2]}>
                <TextInput placeholder="Id" style={[theme.fontBase, styles.input, theme.ml2]} placeholderTextColor={"#9b9b9b"} />
            </View>
            <View style={[styles.inputBorder, theme.mb2]}>
                <TextInput placeholder="Email address" style={[theme.fontBase, styles.input, theme.ml2]} placeholderTextColor={"#9b9b9b"} />
            </View>
            <View style={[styles.inputBorder, theme.mb1]}>
                <TextInput placeholder="Password" style={[theme.fontBase, styles.input, theme.ml2]} placeholderTextColor={"#9b9b9b"} />
            </View>
            <View>
                <Pressable style={[styles.button, theme.alignItemsCenter, theme.pt2, theme.pb2,theme.mt1, theme.mb1,]}>
                    <BoldText style={[theme.fontBase, styles.text]}>Sign Up</BoldText>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.purple,
        borderRadius: 15,
    },
    text: {
        color: "#fff", 
    },
    input: {
        height: 60,        
        letterSpacing: -0.5, 
    },
    inputBorder : {
        borderRadius: 15,
        backgroundColor: "#fff",
    },
});

export default RegistarForm;