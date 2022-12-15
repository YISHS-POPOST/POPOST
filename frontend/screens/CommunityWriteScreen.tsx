import { View, SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CommunityWriteContents from '../components/community/CommunityWriteContents';
import theme from '../theme';
import { useEffect } from "react";
import { setWriteData, writeDataClear } from '../src/actions/communityAction';

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