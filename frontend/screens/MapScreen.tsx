import { SafeAreaView } from 'react-native';
import MapMainContents from '../components/map/MapMainContents';
import MapLocationBtn from '../components/map/MapBtnContents';
import MapMarkerView from '../components/map/MapMarkerView';
import { useState } from 'react';

const MapScreen = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <>
            <SafeAreaView style={{flex: 1}}>
                <MapMainContents modal={{modalVisible, setModalVisible}} />
                <MapMarkerView />
            </SafeAreaView>
            <MapLocationBtn modal={{modalVisible, setModalVisible}} />
        </>
    );
}

export default MapScreen;