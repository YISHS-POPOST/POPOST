import { View, StyleSheet, Text, SafeAreaView } from "react-native";

import { BoldText, RegularText } from '../Text';
import theme from '../../theme';

const RegisterHeader = () => {
    return (
        <View>
            <BoldText style={[theme.mt5, theme.mb1, theme.fontTitleSize, styles.titleText]}>Hi ! </BoldText>     
            <BoldText style={[theme.fontXl, theme.mb2, styles.subText]}>Create a new account</BoldText>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 50,
        letterSpacing: -1,
        color: "#132275",
    },
    subText: {
        letterSpacing: -.5,
        color: "#576dec",
    }
});

export default RegisterHeader;