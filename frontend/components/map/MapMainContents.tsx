import { StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Platform, PermissionsAndroid } from "react-native";
import { useState, useEffect, useRef } from "react";
import Geolocation from "react-native-geolocation-service";
import { createIconSetFromFontello } from "react-native-vector-icons";

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
        <MapView
            style={styles.display}
            showsUserLocation={true}
            showsMyLocationButton={false}
            initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0043,
                longitudeDelta: 0.0034,
            }}
        >
        <Marker
            coordinate={{
                latitude: location.latitude + 0.0006,
                longitude: location.longitude + 0.0006,
            }}
        />
        </MapView>
    );
};

const styles = StyleSheet.create({
    display: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});

export default MapMainContents;
