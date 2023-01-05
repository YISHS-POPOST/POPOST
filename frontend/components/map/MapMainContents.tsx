import { StyleSheet, Dimensions, SafeAreaView, View } from "react-native";
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
import theme from "../../theme";

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

interface MarkerViewType {
    setMarkerView: Dispatch<SetStateAction<boolean>>;
}

interface MarkerIdType {
    setMarkerId: Dispatch<SetStateAction<number>>;
}


type Props = {
    modal: ModalType;
    markerViewProps: MarkerViewType;
    markerIdProps: MarkerIdType;
    locationProps: any;
};

const MapMainContents = ({ modal, markerViewProps, markerIdProps, locationProps }: Props) => {
    const [markerList, setMarkerList] = useState<MarkerList[]>();
    const {location, setLocation} = locationProps;
    const {modalVisible, setModalVisible} = modal;
    const {setMarkerView} = markerViewProps;
    const {setMarkerId} = markerIdProps;

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
            },
            {
                enableHighAccuracy: true,
            }
        );
    }, []);


    return !location ? null : (
        <View style={styles.container}>
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
            {
                markerList && markerList.map((data) => (
                    <Fragment key={data.id}>
                        <Marker
                            coordinate={{
                                latitude: Number(data.latitude),
                                longitude: Number(data.longitude),
                            }}
                            tracksViewChanges={false}
                            icon={require("../../assets/image/post/post8.png")}
                            onPress={() => {
                                setMarkerView(true);
                                setMarkerId(data.id);
                            }}
                        >
                        </Marker>
                        <Circle
                            center={{
                                latitude: Number(data.latitude),
                                longitude: Number(data.longitude),
                            }}
                            radius={18}
                            strokeWidth={1}
                            strokeColor="#7C42FF"
                            fillColor="#7b42ff42"
                        />
                    </Fragment>
                ))
            }
            </MapView>
            <MapPostAddModal
                modal={{modalVisible, setModalVisible}}
                location={location}
                getNoteList={getNoteList}
            />
        </View>
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
