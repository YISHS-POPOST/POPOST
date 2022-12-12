import { SafeAreaView, StyleSheet } from "react-native";
import { BoldText } from '../components/Text';

import HomeNote from '../components/Home/HomeNote';

import theme from '../theme';

const HomeScreen = () => {
    return (
        <SafeAreaView style={theme.container}>
            <BoldText style={[theme.fontTitleSize, styles.titleText, theme.mt3, theme.mb2]}>HOME</BoldText>
            <HomeNote />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titleText: {
        color: "#000",
        letterSpacing: -0.5,
    }
})

export default HomeScreen;