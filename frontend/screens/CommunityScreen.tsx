import {SafeAreaView, ScrollView} from 'react-native';

import CommunityPost from '../components/community/CommunityPost';



const CommunityScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <CommunityPost />
            </ScrollView>
        </SafeAreaView>
    );
}



export default CommunityScreen;