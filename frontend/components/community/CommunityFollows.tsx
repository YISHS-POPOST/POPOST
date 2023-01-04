import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, TouchableOpacity, StyleSheet } from "react-native";
import { useRef } from "react";
import { BoldText } from "../../components/Text";
import theme from "../../theme";

type Props = {
    follow_id: string;
}

const CommunityFollows = ({follow_id}: Props) => {
    const check = useRef({
        isDoubleCheck: false,
    });

    const FollowsAction = () => {
        if(check.current.isDoubleCheck) return;
        check.current.isDoubleCheck = true;

        AsyncStorage.getItem("user_id", (err, res) => {
            const follower_id = res;
            axios
                .post(API_URL + "/follows/follow", { follow_id, follower_id })
                .then((res) => {
                    const msg = res.data.message;
                    const type = res.data.type;

                    switch (type) {
                        case "cancel":
                            Alert.alert("커뮤니티", msg, [{ text: "확인" }]);
                            break;
                        case "success":
                            Alert.alert("커뮤니티", msg, [{ text: "확인" }]);
                            break;
                        default:
                            break;
                    }
                })
                .catch((err) => {
                    Alert.alert("커뮤니티", err.response.data.message, [
                        { text: "확인" },
                    ]);
                })
                .finally(() => {
                    check.current.isDoubleCheck = false;
                })
        });
    };

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={FollowsAction}
            style={[
                styles.button,
                { backgroundColor: theme.colors.softBlue },
                theme.p1,
                theme.mb1,
            ]}
        >
            <BoldText
                style={[
                    theme.fontSmall,
                    theme.justifyContentEnd,
                    theme.pl1,
                    theme.pr1,
                    { color: theme.colors.blue },
                ]}
            >
                팔로우
            </BoldText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: theme.colors.softBlue,
    },
});

export default CommunityFollows;
