import { SafeAreaView } from 'react-native';
import MapMainContents from '../components/map/MapMainContents';
import MapLocationBtn from '../components/map/MapBtnContents';

const MapScreen = () => {
    return (
        <>
            <SafeAreaView style={{flex: 1}}>
                <MapMainContents />
            </SafeAreaView>
            <MapLocationBtn />
        </>
    );
}

export default MapScreen;