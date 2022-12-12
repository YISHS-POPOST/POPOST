import { SafeAreaView, StyleSheet } from "react-native";
import { BoldText } from '../components/Text';

import HomeWeather from '../components/Home/HomeWeather';
import HomeCommunity from '../components/Home/HomeCommunity';
import HomeMessenger from '../components/Home/HomeMessenger'

import theme from '../theme';

const HomeScreen = () => {
    return (
        <SafeAreaView style={[theme.mainContainer, styles.bg]}>
            <HomeWeather />
            <HomeCommunity />
            <HomeMessenger />
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