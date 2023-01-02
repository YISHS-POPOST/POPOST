import { SafeAreaView } from 'react-native';
import MapMainContents from '../components/map/MapMainContents';
import MapLocationBtn from '../components/map/MapBtnContents';
import { useState } from 'react';

const MapScreen = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <>
            <SafeAreaView style={{flex: 1}}>
                <MapMainContents modal={{modalVisible, setModalVisible}} />
            </SafeAreaView>
            <MapLocationBtn modal={{modalVisible, setModalVisible}} />
        </>
    );
}

export default MapScreen;