import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import theme from "../../theme";
import React, { useState, createRef } from "react";
import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
    setApplyList: any;
    community_id: number;
}

const CommunityApplyModalInput = ({setApplyList, community_id}: Props) => {
    const [content, setContent] = useState("");

    const postApply = async () => {
        AsyncStorage.getItem("user_id", (err, res) => {
            const user_id = res;
            axios
                .post(API_URL + "/community-applies/applyAdd", {
                    content,
                    id : community_id,
                    user_id,
                })
                .then((res) => {
                    Alert.alert("댓글", res.data.message, [{ text: "확인" }]);
                    setContent("");
                    setApplyList();
                })
                .catch((err) => console.log(err));
        });
    };

    return (
        <View
            style={[
                theme.flexDirectionRow,
                theme.justifyContentBetween,
                theme.alignItemsCenter,
            ]}
        >
            <TextInput
                placeholder="댓글 추가..."
                style={styles.input}
                placeholderTextColor={"#5c5c5c"}
                onChangeText={(text) => {
                    setContent(text);
                }}
            />
            <TouchableOpacity
                activeOpacity={0.7}
                style={[
                    theme.justifyContentCenter,
                    theme.alignItemsCenter,
                ]}
                onPress={() => postApply()}
            >
                <Octicons name="paper-airplane" size={20} color={"#cccccc"} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: 240,
        paddingLeft: 10,
        borderRadius: 6,
        backgroundColor: "#f3f3f3",
        height: 35,
        fontSize: 10,
        letterSpacing: -0.5,
    },
});

export default CommunityApplyModalInput;
