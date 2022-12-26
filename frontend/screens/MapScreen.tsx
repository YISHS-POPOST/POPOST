import { SafeAreaView } from 'react-native';
import MapMainContents from '../components/map/MapMainContents';

const MapScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <MapMainContents />
        </SafeAreaView>
    );
}

export default MapScreen;