import { StyleSheet, Dimensions, SafeAreaView } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Platform, PermissionsAndroid } from "react-native";
import { useState, useEffect } from "react";
import Geolocation from "react-native-geolocation-service";
import { Dispatch, SetStateAction } from "react";
import MapPostAddModal from "./MapPostAddModal";

interface Location {
    latitude: number;
    longitude: number;
}

interface ModalType {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
}

type Props = {
    modal: ModalType;
}

const MapMainContents = ({modal} : Props) => {
    const [location, setLocation] = useState<Location | undefined>(undefined);
    const {modalVisible, setModalVisible} = modal;

    const locationFindRequest = async () => {
        try {
            if (Platform.OS === "android") {
                return await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        locationFindRequest();

        Geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                setLocation({
                    latitude,
                    longitude,
                });
            },
            (error) => {
                console.log(error.code, error.message);
            }
            // 백그라운드 사용자 위치 추적
            // {
            //     enableHighAccuracy: true,
            //     timeout: 15000,
            //     maximumAge: 10000,
            // }
        );
    }, []);

    return !location ? null : (
        <SafeAreaView style={styles.container}>
            <MapView
                style={styles.display}
                showsUserLocation={true}
                showsMyLocationButton={false}
                maxZoomLevel={20}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0043,
                    longitudeDelta: 0.0034,
                }}
            >
            {/* 마커 모음 -> 마커 최적화 */}
            <Marker
                coordinate={{
                    latitude: location.latitude + 0.0006,
                    longitude: location.longitude + 0.0006,
                }}
                tracksViewChanges={false}
                icon={require('../../assets/image/post/post2.png')}
            />
            <Marker
                coordinate={{
                    latitude: location.latitude - 0.0003,
                    longitude: location.longitude - 0.0003,
                }}
                tracksViewChanges={false}
                icon={require('../../assets/image/post/post2_watched.png')}
            />
            </MapView>
            <MapPostAddModal modal={{modalVisible, setModalVisible}} location={location} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    display: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});

export default MapMainContents;
