import { TouchableOpacity, StyleSheet, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import theme from "../../theme";
import { useState, Dispatch, SetStateAction } from "react";

import MapBarBtn from "./button/MapBarBtn";
import MapLoactionBtn from "./button/MapLocationBtn";

const MapBtnContents = () => {
    const [view, setView] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <MapBarBtn views={{view, setView}} />
            <MapLoactionBtn views={{ view, setView }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 14,
        right: 14,
    },
});

export default MapBtnContents;
