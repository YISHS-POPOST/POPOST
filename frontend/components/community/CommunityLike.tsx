import theme from "../../theme";
import { TouchableOpacity, StyleSheet } from "react-native";
import { BoldText } from "../Text";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { API_URL } from "@env";
import { StateInterface } from "../../src/type/state";
import { useSelector } from "react-redux";

type Props = {
    community_id: number;
    list: list;
};

interface listType {
    user_id: string;
    community_id: number;
}

interface list extends Array<listType> {}

const CommunityLike = ({ community_id, list }: Props) => {
    const [likeCheck, setLikeCheck] = useState(true);

    const check = useRef({
        isDoubleCheck: false,
    });

    const getLikeAction = () => {
        if (check.current.isDoubleCheck) return;
        check.current.isDoubleCheck = true;

        AsyncStorage.getItem("user_id", (err, res) => {
            const user_id = res;
            axios
                .post(API_URL + "/community-likes/getLike", {
                    user_id,
                    community_id,
                })
                .then((res) => {
                    (res.data.message === "좋아요") ? setLikeCheck(false) : setLikeCheck(true); 
                    console.log(likeCheck);
                })
                .catch((err) => console.log(err.response))
                .finally(() => {
                    check.current.isDoubleCheck = false;
                });
        });
    };

    const likeCheckAction = async () => {
        const user = useSelector((state: StateInterface) => state.users);
        const check = list.filter((res: any) => res.user_id === user.id);
        if(check.length === 0) setLikeCheck(true)
        else setLikeCheck(false);
    };

    // 고치기
    // useEffect(() => {
    //     likeCheckAction();
    // }, []);

    return (
        <TouchableOpacity
            activeOpacity={0.95}
            style={[theme.flexDirectionRow, theme.alignItemsCenter, theme.mr3]}
            onPress={() => getLikeAction()}
        >
            <AntDesign name="like2" style={[styles.icon, {color: likeCheck ? "#7e7e7e" : theme.colors.red}]} size={17} />
            <BoldText style={[styles.icon, theme.fontSmall, theme.ml1, {color: likeCheck ? "#7e7e7e" : theme.colors.red}]}>
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
