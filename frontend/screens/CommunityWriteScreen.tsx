import { View, SafeAreaView, StyleSheet } from 'react-native';
import CommunityWriteContents from '../components/community/CommunityWriteContents';
import theme from '../theme';

const CommunityWriteScreen = () => {
    return (
        <SafeAreaView style={theme.mainContainer}>
            <CommunityWriteContents />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default CommunityWriteScreen;