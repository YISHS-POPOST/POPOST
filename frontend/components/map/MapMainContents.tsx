import { StyleSheet, Dimensions, SafeAreaView } from "react-native";
import MapView, {
    PROVIDER_GOOGLE,
    Marker,
    Callout,
    Circle,
} from "react-native-maps";
import { Platform, PermissionsAndroid } from "react-native";
import { useState, useEffect, useCallback, useRef, Fragment } from "react";
import Geolocation from "react-native-geolocation-service";
import { Dispatch, SetStateAction } from "react";
import MapPostAddModal from "./MapPostAddModal";
import axios from "axios";
import { API_URL } from "@env";
import standardMode from "../map/customMapStyle/standardMode.json";

interface Location {
    latitude: number;
    longitude: number;
}

interface MarkerList {
    id: number;
    latitude: string;
    longitude: string;
    user_id: string;
    content: string;
    created_at: string;
}

interface ModalType {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
}

type Props = {
    modal: ModalType;
};

const MapMainContents = ({ modal }: Props) => {
    const [location, setLocation] = useState<Location | undefined>(undefined);
    const [markerList, setMarkerList] = useState<MarkerList[]>();
    const { modalVisible, setModalVisible } = modal;

    // 마커리스트
    const getNoteList = useCallback(() => {
        axios.get(API_URL + "/notes").then((res) => {
            setMarkerList(res.data);
        });
    }, []);

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
        getNoteList();
    }, []);

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
                toolbarEnabled={false}
                customMapStyle={standardMode}
                style={styles.display}
                showsUserLocation={true}
                showsMyLocationButton={false}
                maxZoomLevel={20}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.00301,
                    longitudeDelta: 0.00103,
                }}
            >
                {markerList &&
                    markerList.map((data) => (
                        <Fragment key={data.id}>
                            <Marker
                                coordinate={{
                                    latitude: Number(data.latitude) - 0.00004,
                                    longitude: Number(data.longitude) + 0.00001,
                                }}
                                tracksViewChanges={false}
                                icon={require("../../assets/image/post/post7.png")}
                            ></Marker>
                            <Circle
                                center={{
                                    latitude: Number(data.latitude),
                                    longitude: Number(data.longitude),
                                }}
                                radius={20}
                                strokeWidth={1}
                                strokeColor="#d1d1d1"
                                fillColor="#e4e2e2"
                            />
                        </Fragment>
                    ))}
            </MapView>
            <MapPostAddModal
                modal={{modalVisible, setModalVisible}}
                location={location}
                getNoteList={getNoteList}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    display: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});

export default MapMainContents;
