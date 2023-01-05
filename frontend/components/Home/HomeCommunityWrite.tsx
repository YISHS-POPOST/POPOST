import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { StateInterface } from "../../src/type/state";
import theme from "../../theme";
import { API_URL } from "@env";
import {BoldText, RegularText} from "../Text";

const HomeCommunityWrite = () => {
    const users = useSelector((state: StateInterface) => state.users);
    const navigation = useSelector((state: StateInterface) => state.navigation);

    return (
        <View style={[styles.container, theme.mt3, theme.p4, theme.flexDirectionRow, theme.alignItemsCenter, theme.justifyContentBetween]}>
            <View style={[theme.flexDirectionRow, theme.alignItemsCenter]}>
                <Image
                    source={
                        users.profile
                        ? // 백엔드 경로 설정 필요
                            {uri : API_URL + "/files/profile/" + users.profile}
                        : require("../../assets/image/profile/default.jpg")
                    }
                    style={[styles.image]}
                />
                <RegularText style={[theme.ml2, styles.text, theme.fontSmall]}>게시글을 작성해보세요.</RegularText>
            </View>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('CommunityWrite')}
            >
                <BoldText style={styles.write}>글쓰기</BoldText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    write: {
        color: theme.colors.blue,
        letterSpacing: -0.5,
    },
    text: {
        letterSpacing: -0.5,
    },
    container: {
        backgroundColor: "#fff",
        height: "auto",
        borderRadius: 15,
    },
    image: {
        width: 40,
        height: 40,
    },
});

export default HomeCommunityWrite;