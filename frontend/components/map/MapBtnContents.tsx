import { StyleSheet, View } from "react-native";
import { useState } from "react";
import MapBarBtn from "./button/MapBarBtn";
import MapLoactionBtn from "./button/MapLocationBtn";
import MapPostAddBtn from "./button/MapPostAddBtn";
import { Dispatch, SetStateAction } from "react";

interface ModalType {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
}

type Props = {
    modal: ModalType
}

const MapBtnContents = ({modal}: Props) => {
    const [view, setView] = useState<boolean>(false);
    const {modalVisible, setModalVisible} = modal;

    return (
        <View style={styles.container}>
            <MapBarBtn views={{ view, setView }} />
            <MapLoactionBtn views={{ view, setView }} />
            <MapPostAddBtn views={{ view, setView }} modal={{modalVisible, setModalVisible}} />
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
