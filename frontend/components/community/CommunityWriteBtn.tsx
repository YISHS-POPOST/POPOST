import { View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import { useState } from 'react';

const CommunityWriteBtn = ({navigation}: ProfileScreenNavigationProp) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("CommunityWrite")} style={[styles.button, theme.justifyContentCenter, theme.alignItemsCenter]}>
            <FontAwesome5 name="pencil-alt" size={23} color={"#fff"}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        width: 65,
        height: 65,
        backgroundColor: theme.colors.blue,
        zIndex: 100,
        position: "absolute",
        bottom: 14,
        right: 14,
    },
    pressBtn : {
        backgroundColor : '#333'
    }
});

export default CommunityWriteBtn;