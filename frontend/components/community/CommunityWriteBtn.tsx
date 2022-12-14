import { View, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ProfileScreenNavigationProp } from "../../types/NavigateType";

const CommunityWriteBtn = ({navigation}: ProfileScreenNavigationProp) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("CommunityWrite")}>
            <View style={[styles.button, theme.justifyContentCenter, theme.alignItemsCenter]}>
                <FontAwesome5 name="pencil-alt" size={23} color={"#fff"}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 200,
        width: 65,
        height: 65,
        backgroundColor: theme.colors.blue,
        zIndex: 100,
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: 14,
    },
});

export default CommunityWriteBtn;