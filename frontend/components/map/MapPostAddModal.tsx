import {
    SafeAreaView,
    Modal,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Alert,
} from "react-native";
import theme from "../../theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BoldText } from "../Text";
import { Dispatch, SetStateAction, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "@env";
import AlertView from "../AlertView";

interface ModalType {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
}

interface LocationType {
    latitude: number;
    longitude: number;
}

type Props = {
    modal: ModalType;
    location: LocationType;
    getNoteList: any;
};

const MapPostAddModal = ({ modal, location, getNoteList }: Props) => {
    const { modalVisible, setModalVisible } = modal;
    const [content, setContent] = useState<string>();

    const postAddAction = () => {
        if(!content)
            return AlertView('쪽지', '빈 값은 생성이 불가능합니다.');

        AsyncStorage.getItem("user_id", (err, res) => {
            const user_id = res;
            axios
                .post(API_URL + "/notes/add", { user_id, ...location, content })
                .then((res: any) => {
                    if(res.status === 201)
                        Alert.alert('쪽지', res.data.message, [{text: "확인", onPress: () => setModalVisible(false)}]);
                        return getNoteList();
                })
                .catch(err => {
                    return AlertView('쪽지', err.response.data.message);
                })
        });
    };

    return (
        <SafeAreaView>
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
                                theme.mb2,
                            ]}
                        >
                            <BoldText style={[styles.title, theme.fontLg]}>
                                쪽지 생성하기
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
                        <View
                            style={[
                                theme.justifyContentBetween,
                                theme.flexDirectionRow,
                                theme.alignItemsCenter,
                                theme.mb2,
                            ]}
                        >
                            <TextInput
                                value={`위도 | ${location.latitude}`}
                                editable={false}
                                style={[styles.locationInput]}
                            />
                            <TextInput
                                value={`경도 | ${location.longitude}`}
                                editable={false}
                                style={[styles.locationInput]}
                            />
                        </View>
                        <TextInput
                            placeholder="쪽지 내용..."
                            placeholderTextColor={"#5c5c5c"}
                            style={[styles.input, theme.mb2]}
                            multiline={true}
                            maxLength={300}
                            onChangeText={(text) => setContent(text)}
                        />
                        <TouchableOpacity
                            style={[
                                styles.addbtn,
                                theme.justifyContentCenter,
                                theme.alignItemsCenter,
                            ]}
                            onPress={postAddAction}
                        >
                            <BoldText style={styles.text}>생성하기</BoldText>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    locationInput: {
        width: "47.3%",
        borderRadius: 6,
        backgroundColor: "#f3f3f3",
        paddingLeft: 10,
        fontSize: 13,
    },
    text: {
        letterSpacing: -0.5,
        color: "#fff",
    },
    addbtn: {
        borderRadius: 6,
        height: 35,
        backgroundColor: theme.colors.blue,
    },
    input: {
        borderRadius: 6,
        backgroundColor: "#f3f3f3",
        fontSize: 13,
        paddingLeft: 10,
        height: 130,
        flexShrink: 2,
        textAlignVertical: "top",
    },
    commentList: {
        height: 300,
    },
    title: {
        color: "#000",
        letterSpacing: -1,
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

export default MapPostAddModal;
