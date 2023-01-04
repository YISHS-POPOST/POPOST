import { SafeAreaView } from 'react-native';
import MapMainContents from '../components/map/MapMainContents';
import MapLocationBtn from '../components/map/MapBtnContents';
import MapMarkerView from '../components/map/MapMarkerView';
import { useState } from 'react';


const MapScreen = () => {
    const [location, setLocation] = useState<any>();
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [markerView, setMarkerView] = useState<boolean>(false);
    const [markerId, setMarkerId] = useState<number>(0);
    

    return (
        <>
            <SafeAreaView style={[{flex: 1}]}>
                <MapMainContents modal={{modalVisible, setModalVisible}} markerViewProps={{setMarkerView}} markerIdProps={{setMarkerId}} locationProps ={{location, setLocation}} />
                <MapMarkerView markerViewProps={{markerView, setMarkerView}} markerIdProps={{markerId, setMarkerId}} locationProps={{location, setLocation}} />
            </SafeAreaView>
            <MapLocationBtn modal={{modalVisible, setModalVisible}} />
        </>
    );
}

export default MapScreen;