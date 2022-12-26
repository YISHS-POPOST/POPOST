import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MapMainContents = () => {
    return (
        <MapView
            style={styles.display}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
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
