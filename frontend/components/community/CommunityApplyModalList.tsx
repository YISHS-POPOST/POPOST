import { View, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import { BoldText, RegularText } from "../Text";
import theme from "../../theme";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "@env";

interface Props {
    id: number;
};

const CommunityApplyModalList = (props: Props) => {
    const [applyList, setApplyList] = useState<any>([]);
    const {id} = props;

    const getApplyList = async () => {
        await axios.post(API_URL + "/community-applies/getList", {id})
        .then(res => {
            setApplyList(res.data);
        })
        .catch(err =>console.log(err.response))
    }

    useEffect(() => {
        getApplyList();
    }, [])

    console.log(applyList);

    return applyList.length === 0 ? null : (
        <ScrollView>
            {
                applyList.map((data: any, idx: number) => {
                    <View style={[theme.flexDirectionRow, theme.mb3]} key={idx}>
                        <View style={[theme.flexDirectionRow, theme.justifyContentBetween]}>
                            <Image source={require("../../assets/image/profile/default.jpg")} style={[styles.image, theme.mr2]} />
                            <View>
                                <BoldText style={[styles.userText]}>{data.user_id}</BoldText>
                                <RegularText style={styles.contentText}>{data.content}</RegularText>
                            </View>
                        </View>
                        <TouchableOpacity style={[theme.alignItemsEnd, {width: 20}]}>
                            <Ionicons name="close" size={20} color={"#000"} />
                        </TouchableOpacity>
                    </View>
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    userText: {
        color: "#686868",
        letterSpacing: -.5,
        fontSize: 10,
    },
    contentText: {
        color: "#000",
        letterSpacing: -.5,
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
})

export default CommunityApplyModalList;

