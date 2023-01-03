import { View, StyleSheet, Animated } from "react-native";
import theme from "../../theme";
import { useRef } from "react";
import { BoldText, RegularText } from "../Text";
import Ionicons from "react-native-vector-icons/Ionicons";

const MapMarkerView = () => {
    // const animation = useRef(new Animated.Value(1)).current;

    return (
        <View style={[theme.p5, styles.container]}>
            <View style={[theme.flexDirectionRow, theme.alignItemsCenter, theme.justifyContentBetween, theme.mb2]}>
                <BoldText style={[styles.text, theme.fontXxxl, styles.textBlack]}>배아무개</BoldText>
                <Ionicons name="close" size={20} color={"#000"} />
            </View>
            <RegularText style={[theme.fontBase, styles.textBlack]}>현미밥 북어콩나물국 야채계란찜 돈육사천자장볶음 에그타르트 배추김치 쌈장 추 쁘띠자두음료</RegularText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        position: "absolute",
        zIndex: 101,
        width: "100%",
        height: 200,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.7,
        shadowRadius: 10.68,
        elevation: 11,
    },
    textBlack: {
        color: "#000",
    },
    text: {
        letterSpacing: -.5,
    },
});

export default MapMarkerView;