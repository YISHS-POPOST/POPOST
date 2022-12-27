import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Platform, PermissionsAndroid } from "react-native";
import { useState, useEffect } from "react";
import Geolocation from "react-native-geolocation-service";

interface Location {
    latitude: number;
    longitude: number;
}

const MapMainContents = () => {
    const [location, setLocation] = useState<Location | undefined>(undefined);

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
    locationFindRequest();

    useEffect(() => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({
                    latitude,
                    longitude,
                });
            },
            (error) => {
                console.log(error.code, error.message);
            },
            // 백그라운드 사용자 위치 추적
            // {
            //     enableHighAccuracy: true,
            //     timeout: 15000,
            //     maximumAge: 10000,
            // }
        );
    }, []);

    

    return !location ? null : (
        <MapView
            style={styles.display}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 1,
                longitudeDelta: 1,
            }}
        />
    );
};

const styles = StyleSheet.create({
    display: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});

export default MapMainContents;
