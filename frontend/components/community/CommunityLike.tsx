import theme from "../../theme";
import { TouchableOpacity, StyleSheet } from "react-native";
import { BoldText } from "../Text";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRef } from "react";
import { API_URL } from "@env";

type Props = {
    community_id: number;
}

const CommunityLike = ({community_id}: Props) => {
    const check = useRef({
        isDoubleCheck: false,
    });

    const getLikeAction = () => {
        if(check.current.isDoubleCheck) return;
        check.current.isDoubleCheck = true;

        AsyncStorage.getItem("user_id", (err, res) => {
            const user_id = res;
            axios.post(API_URL + "/community-likes/getLike", {user_id, community_id}).then((res) => {
                console.log(res);
            })
            .catch(err => console.log(err.response))
            .finally(() => {
                check.current.isDoubleCheck = false;
            })
        })
    }

    return (
        <TouchableOpacity
            activeOpacity={0.95}
            style={[theme.flexDirectionRow, theme.alignItemsCenter, theme.mr3]}
            onPress={() => getLikeAction()}
        >
            <AntDesign name="like2" style={styles.icon} size={17} />
            <BoldText style={[styles.icon, theme.fontSmall, theme.ml1]}>
                좋아요
            </BoldText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    icon: {
        color: "#7e7e7e",
    },
});

export default CommunityLike;
