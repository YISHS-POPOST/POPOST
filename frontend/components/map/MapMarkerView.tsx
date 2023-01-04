import { View, StyleSheet, Animated } from "react-native";
import theme from "../../theme";
import { useRef, useState, useEffect } from "react";
import { BoldText, RegularText } from "../Text";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { create, all } from 'mathjs';
import AlertView from "../AlertView";

interface MarkerViewType {
    markerView: boolean;
    setMarkerView: Dispatch<SetStateAction<boolean>>;
}

interface MarkerIdType {
    markerId: number;
    setMarkerId: Dispatch<SetStateAction<number>>;
}

type Props = {
    markerViewProps: MarkerViewType;
    markerIdProps: MarkerIdType;
    locationProps: any
};

const MapMarkerView = ({ markerViewProps, markerIdProps, locationProps }: Props) => {
    const { markerView, setMarkerView } = markerViewProps;
    const { markerId, setMarkerId } = markerIdProps;
    const [ markerData, setMarkerData ] = useState<Boolean | object>();
    const {location} = locationProps;

    const getNoteFindAction = async () => {
        if (markerView === false && markerId == 0) return;

        await axios.post(API_URL + "/notes/find", {markerId}).then((res) => {
            // 200 거리 안 / 201 거리 밖 0.00016
            const note_latitude = res.data.latitude;
            const note_longitude = res.data.longitude; 

            const mathF = create(all, { number: 'Fraction' }) as math.MathJsStatic;

            const mathjsCalc = (expr: string) => {
                return mathF.number(mathF.evaluate(expr));
            };
            
            // console.log(mathjsCalc(`${Number(note_latitude)} - ${0.00016}`) <= location.latitude);
            // console.log(mathjsCalc(`${Number(note_latitude)} - ${0.00016}`), location.latitude);
            
            if(
                mathjsCalc(`${Number(note_latitude)} + ${0.00016}`) >= location.latitude === 
                mathjsCalc(`${Number(note_latitude)} - ${0.00016}`) <= location.latitude &&
                mathjsCalc(`${Number(note_longitude)} + ${0.00016}`) >= location.longitude === 
                mathjsCalc(`${Number(note_longitude)} - ${0.00016}`) <= location.longitude
            ) {
                setMarkerData(res.data);
            }else{
                AlertView("쪽지", '범위 내 쪽지만 확인할 수 있어요.');
                setMarkerData(false);
            }
        })
        .catch(err => console.log(err.response));
    };

    
    useEffect(() => {
        getNoteFindAction();
    }, [markerId, markerView])

    return !markerData ? null : (
        <View
            style={[
                theme.p5,
                styles.container,
                { bottom: !markerView ? -200 : 0 },
            ]}
        >
            <View
                style={[
                    theme.flexDirectionRow,
                    theme.alignItemsCenter,
                    theme.justifyContentBetween,
                    theme.mb2,
                ]}
            >
                <View
                    style={[
                        theme.flexDirectionRow,
                        theme.alignItemsEnd,
                        theme.justifyContentBetween,
                    ]}
                >
                    <BoldText
                        style={[
                            styles.text,
                            theme.fontXxxl,
                            styles.textBlack,
                            theme.mr1,
                        ]}
                    >
                        {markerData.user.name}
                    </BoldText>
                    <RegularText
                        style={[
                            styles.text,
                            styles.nickName,
                            { fontSize: 12 },
                            { marginBottom: 3 },
                        ]}
                    >
                        {
                            markerData.user.nickname !== null ? markerData.user.nickname : "별명이 설정되어 있지 않습니다."
                        }
                    </RegularText>
                </View>
                <Ionicons name="close" size={20} color={"#000"} onPress={() => {
                    setMarkerView(false)
                    setMarkerId(0)
                    }} />
            </View>
            <RegularText style={[theme.fontSmall, styles.textBlack, theme.mb3]}>
                {markerData.content}
            </RegularText>
            <View style={[theme.alignItemsEnd]}>
                <RegularText
                    style={[styles.text, styles.datetime, { fontSize: 12 }]}
                >
                    {
                        "생성일 | " + 
                        new Date(markerData.created_at)
                        .toISOString()
                        .slice(0, 19)
                        .replace("T", " ")
                    }
                </RegularText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        bottom: -200,
        position: "absolute",
        zIndex: 101,
        width: "100%",
        height: 200,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.7,
        shadowRadius: 10.68,
        elevation: 11,
    },
    textBlack: {
        color: "#000",
    },
    nickName: {
        color: "#999999",
    },
    text: {
        letterSpacing: -0.5,
    },
    datetime: {
        color: "#888888",
    },
});

export default MapMarkerView;
