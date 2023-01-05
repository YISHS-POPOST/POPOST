import {
    Modal,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../../theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BoldText, RegularText } from "../Text";
import CommunityApplyModalList from "./CommunityApplyModalList";
import CommunityApplyModalInput from "./CommunityApplyModalInput";
import axios from "axios";
import { API_URL } from "@env";
import { useState, useEffect, Dispatch } from "react";

interface Props {
    id: number;
    modalVisible: boolean;
    setModalVisible: Dispatch<React.SetStateAction<boolean>>;
}

const CommunityCommentModal = (props: Props) => {
    const { modalVisible, setModalVisible } = props;
    const [ applyList, setApplyList ] = useState([]);
    const { id } = props;

    const getApplyList = async () => {
        await axios
            .post(API_URL + "/community-applies/getList", { id })
            .then((res) => {
                console.log(res.data);
                setApplyList(res.data);
            })
            .catch((err) => console.log(err.response));
    };

    useEffect(() => {
        getApplyList();
    }, []);

    return (
        <SafeAreaView style={styles.modalView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalBackground}>
                    <View style={[styles.modalContents]}>
                        <View
                            style={[
                                theme.flexDirectionRow,
                                theme.justifyContentBetween,
                                theme.alignItemsCenter,
                                theme.mb3,
                            ]}
                        >
                            <BoldText style={[styles.title, theme.fontLg]}>
                                댓글
                            </BoldText>
                            <TouchableOpacity
                                style={[theme.alignItemsEnd]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Ionicons
                                    name="close"
                                    size={25}
                                    color={"#000"}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.commentList}>
                            <CommunityApplyModalList applyProps={{applyList}} setApplyList={getApplyList} />
                        </View>
                        <CommunityApplyModalInput setApplyList={getApplyList} community_id={id}/>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    commentList: {
        height: 300,
    },
    title: {
        color: "#000",
        letterSpacing: -1,
    },
    modalView: {
        flex: 1,
    },
    modalBackground: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0, .4)",
    },
    modalContents: {
        flex: 0.75,
        backgroundColor: "#ffffff",
        padding: 14,
        borderRadius: 6,
    },
    container: {
        width: 200,
        height: 200,
        margin: 20,
    },
});

export default CommunityCommentModal;
