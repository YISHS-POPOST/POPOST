import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import CommunityList from '../components/community/CommunityList';
import CommunityWriteBtn from '../components/community/CommunityWriteBtn';
import { ProfileScreenNavigationProp } from '../types/NavigateType';

const CommunityScreen = ({navigation} : ProfileScreenNavigationProp) => {
    return (
        <SafeAreaView>
            <CommunityList />
            <CommunityWriteBtn navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});



export default CommunityScreen;