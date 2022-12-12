import { View, StyleSheet } from 'react-native';

import theme from '../../theme';

import HomeMessengerContents from './HomeMessengerContents';

const HomeMessenger = () => {
    return (
        <View style={[styles.container, theme.p4, theme.mt3, theme.justifyContentBetween]}>
            <HomeMessengerContents />
            <HomeMessengerContents />
            <HomeMessengerContents />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 15,
        height: 230,
    },   
});

export default HomeMessenger;