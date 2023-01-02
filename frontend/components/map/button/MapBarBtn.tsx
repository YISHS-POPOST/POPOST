import { TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import theme from "../../../theme"; 
import { Dispatch, SetStateAction } from "react";

interface Props {
    view: boolean;
    setView: Dispatch<SetStateAction<boolean>>;
}

type stateProps = {
    views: Props;
};

const MapBarBtn = ({ views }: stateProps) => {
    const { view, setView } = views;

    const barClickAction = () => {
        !view ? setView(true) : setView(false);
    }

    return (
        <TouchableOpacity activeOpacity={0.95} onPress={barClickAction} style={[styles.button, styles.barButton]}>
            <FontAwesome name="bars" size={23} color={"#fff"}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    barButton: {
        backgroundColor: "#000",
        zIndex: 100,
    },
    button: {
        ...theme.justifyContentCenter,
        ...theme.alignItemsCenter,
        borderRadius: 50,
        width: 55,
        height: 55,
        position: "absolute",
    },
});


export default MapBarBtn;