import { SafeAreaView, StyleSheet } from "react-native";
import { BoldText } from '../components/Text';

import HomeNote from '../components/Home/HomeNote';
import HomeCommunity from '../components/Home/HomeCommunity';

import theme from '../theme';

const HomeScreen = () => {
    return (
        <SafeAreaView style={[theme.mainContainer, styles.bg]}>
            <HomeNote />
            <HomeCommunity />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: theme.colors.backgroundWhite
    },
    titleText: {
        color: "#000",
        letterSpacing: -.5,
    }
})

export default HomeScreen;