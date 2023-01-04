import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import { BoldText, RegularText } from "../Text";
import theme from "../../theme";
import { useState, useEffect, useImperativeHandle } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
    id: number;
};

interface itemProps {
    id: number;
    user_id: string;
    community_id: string;
    content: string;
}

type renderItemType = { item: itemProps };

const renderItem = ({ item }: renderItemType) => {
    const targetDeleteList = async (target_id: number) => {
        AsyncStorage.getItem("user_id", (err, res) => {
            const user_id = res;
            axios
                .post(API_URL + "/community-applies/delete/comment", {
                    target_id,
                    user_id,
                })
                .then((res) => {
                    Alert.alert("댓글", res.data.message, [{ text: "확인" }]);
                })
                .catch((err) =>
                    Alert.alert("댓글", err.response.data.message, [
                        { text: "확인" },
                    ])
                );
        });
    };

    return (
        <View style={[theme.flexDirectionRow, theme.mb3]}>
            <View style={[theme.flexDirectionRow, theme.justifyContentBetween]}>
                <Image
                    source={require("../../assets/image/profile/default.jpg")}
                    style={[styles.image, theme.mr2]}
                />
                <View>
                    <BoldText style={[styles.userText]}>
                        {item.user_id}
                    </BoldText>
                    <RegularText style={styles.contentText}>
                        {item.content}
                    </RegularText>
                </View>
            </View>
            <TouchableOpacity
                style={[theme.alignItemsEnd, { width: 20 }]}
                onPress={() => {
                    targetDeleteList(item.id);
                }}
            >
                <Ionicons name="close" size={15} color={"#000"} />
            </TouchableOpacity>
        </View>
    );
};

const CommunityApplyModalList = (props: Props) => {
    const [applyList, setApplyList] = useState<any>([]);
    const { id } = props;

    const getApplyList = async () => {
        await axios
            .post(API_URL + "/community-applies/getList", { id })
            .then((res) => {
                setApplyList(res.data);
            })
            .catch((err) => console.log(err.response));
    };

    useEffect(() => {
        getApplyList();
    }, []);

    return (
        <SafeAreaView>
            <FlatList data={applyList} renderItem={renderItem} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    userText: {
        color: "#686868",
        letterSpacing: -0.5,
        fontSize: 10,
    },
    contentText: {
        color: "#000",
        letterSpacing: -0.5,
        fontSize: 12,
        width: 220,
    },
    image: {
        borderWidth: 1,
        borderColor: "#f0f0f0",
        borderRadius: 100,
        width: 30,
        height: 30,
    },
});

export default CommunityApplyModalList;
