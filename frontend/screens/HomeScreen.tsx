import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import { BoldText } from '../components/Text';
 
import HomeWeather from '../components/home/HomeWeather';
import HomeCommunity from '../components/home/HomeCommunity';
import HomeMessenger from '../components/home/HomeMessenger';
import HomeNote from '../components/home/HomeNote';

import theme from '../theme';

const HomeScreen = () => {
    return (
        <ScrollView overScrollMode="never">
            <SafeAreaView style={[theme.mainContainer, styles.bg]}>
                <HomeWeather />
                <HomeCommunity />
                <HomeMessenger />
            </SafeAreaView>
            <HomeNote />
        </ScrollView>
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