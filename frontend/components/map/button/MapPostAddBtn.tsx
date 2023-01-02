import { TouchableOpacity, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import theme from "../../../theme"; 
import { Dispatch, SetStateAction } from "react";

interface ViewProps {
    view: boolean;
    setView: Dispatch<SetStateAction<boolean>>;
}

interface ModalProps  {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
}

type Props = {
    views: ViewProps;
    modal: ModalProps;
};

const MapPostAddBtn = ({ views, modal }: Props) => {
    const { view, setView } = views;
    const { modalVisible, setModalVisible } = modal;

    return (
        <TouchableOpacity
            activeOpacity={0.95}
            style={[
                styles.button, 
                !view ? null : styles.actionButton
            ]}
            onPress={() => setModalVisible(true)}
        >
            <Entypo name="plus" size={23} color={"#fff"} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    actionButton: {
        opacity: 1,
        bottom: 55 * 2 + 5 * 2,
    },
    button: {
        backgroundColor: theme.colors.blue,
        ...theme.justifyContentCenter,
        ...theme.alignItemsCenter,
        borderRadius: 50,
        width: 55,
        height: 55,
        bottom: 0,
        opacity: 0,
        position: "absolute",
        transition: ".8s",
    },
});

export default MapPostAddBtn;