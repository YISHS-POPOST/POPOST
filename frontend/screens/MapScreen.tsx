import { SafeAreaView } from 'react-native';
import MapMainContents from '../components/map/MapMainContents';
import MapLocationBtn from '../components/map/MapBtnContents';
import MapMarkerView from '../components/map/MapMarkerView';
import { useState } from 'react';

const MapScreen = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [markerView, setMarkerView] = useState<boolean>(false);
    const [markerId, setMarkerId] = useState<number>(0);

    console.log(markerView, markerId);

    return (
        <>
            <SafeAreaView style={{flex: 1}}>
                <MapMainContents modal={{modalVisible, setModalVisible}} markerViewProps={{setMarkerView}} markerIdProps={{setMarkerId}} />
                <MapMarkerView markerViewProps={{markerView, setMarkerView}} markerIdProps={{markerId, setMarkerId}} />
            </SafeAreaView>
            <MapLocationBtn modal={{modalVisible, setModalVisible}} />
        </>
    );
}

export default MapScreen;