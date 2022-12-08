import { View, Pressable, StyleSheet } from 'react-native';

import theme from '../../theme';
import {BoldText} from '../../components/Text';

const RegisterButton = () => {
    return (
        <View style={theme.mt5}>
            <Pressable style={[styles.button, theme.alignItemsCenter, theme.pt2, theme.pb2,theme.mt1, theme.mb1,]}>
                <BoldText style={[theme.fontBase, styles.text]}>SIGN UP</BoldText>
            </Pressable>
            <Pressable style={[styles.button, theme.alignItemsCenter, theme.pt2, theme.pb2,theme.mt1, theme.mb1,]}>
                <BoldText style={[theme.fontBase, styles.text]}>SIGN UP</BoldText>
            </Pressable>
        </View>
    )
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


export default RegisterButton;