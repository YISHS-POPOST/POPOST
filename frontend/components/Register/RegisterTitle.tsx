import { View, StyleSheet} from "react-native";

import {BoldText} from '../../components/Text';
import theme from '../../theme';

const RegisterText = () => {
    return (
        <View style={[styles.container, theme.justifyContentStart, theme.mt5, theme.mb3]}>
            <BoldText style={[theme.fontTitleSize, theme.alignItemsCenter, styles.titleText]}>Register</BoldText>     
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    titleText: {
        letterSpacing: -1,
        color: "#000",
    },
});

export default RegisterText;