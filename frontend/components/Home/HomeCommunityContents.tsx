import { View, StyleSheet } from "react-native";

import theme from "../../theme";
import { BoldText, RegularText } from "../Text";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomeCommunityContents = ({ item, idx }: any) => {
    return (
        <View style={[theme.mt4]}>
            <View style={[theme.flexDirectionRow]}>
                <View style={[theme.flexDirectionRow, theme.alignItemsStart]}>
                    <BoldText style={[styles.title, theme.fontBase, theme.mr1]}>
                        T.
                    </BoldText>
                    <View>
                        <BoldText
                            style={[
                                theme.fontBase,
                                styles.titleText,
                                { marginBottom: 5 },
                            ]}
                        >
                            {item.title.length > 18
                                ? item.title.slice(0, 17) + "..."
                                : item.title}
                        </BoldText>
                        <RegularText style={[styles.subText, theme.fontSmall]}>
                            {item.content.length > 24
                                ? item.content.slice(0, 17) + "..."
                                : item.content}
                        </RegularText>
                    </View>
                    {/* <View style={[theme.alignItemsEnd, theme.justifyContentEnd]}>
                        <RegularText style={[styles.subText, theme.fontSmall]}>1</RegularText>
                    </View> */}
                </View>
            </View>
            <View
                style={[
                    theme.pt3,
                    theme.flexDirectionRow,
                    theme.alignItemsCenter,
                    theme.justifyContentBetween,
                ]}
            >
                <RegularText style={[styles.subText, { fontSize: 11 }]}>
                    {"좋아요 | " + `${item.communityLike.length}` + "개"}
                </RegularText>
                <RegularText style={[styles.subText, { fontSize: 11 }]}>
                    {"생성일 | " +
                        new Date(item.create_dt)
                            .toISOString()
                            .slice(0, 19)
                            .replace("T", " ")}
                </RegularText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dfdfdf",
    },
    titleText: {
        color: "#000",
        letterSpacing: -0.5,
    },
    subText: {
        color: "#686868",
        letterSpacing: -0.5,
    },
    title: {
        color: theme.colors.blue,
    },
    state: {
        color: "#000",
        marginRight: 3,
    },
    regText: {
        color: "#000",
        letterSpacing: -0.5,
    },
});

export default HomeCommunityContents;
