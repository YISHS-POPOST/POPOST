import { TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import theme from "../../../theme";
import { Dispatch, SetStateAction } from "react";

interface Props {
    view: boolean;
    setView: Dispatch<SetStateAction<boolean>>;
}

type stateProps = {
    views: Props;
};

const MapLoactionBtn = ({ views }: stateProps) => {
    const { view, setView } = views;

    return (
        <TouchableOpacity
            activeOpacity={0.95}
            style={[
                styles.button, 
                !view ? null : styles.actionButton
            ]}
        >
            <MaterialIcons name="my-location" size={23} color={"#fff"} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    actionButton: {
        opacity: 1,
        bottom: 55 * 1 + 5,
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
        transition: ".4s",
    },
});

export default MapLoactionBtn;
