import { View, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../theme";
import { BoldText, RegularText } from "../Text";
import HomeCommunityContents from "./HomeCommunityContents";

const HomeCommunity = ({ communityItem }: any) => {
    return (
        <View style={[styles.container, theme.p4, theme.mt3]}>
            <BoldText style={[styles.titleText, theme.fontXl, theme.mb2]}>
                최신 커뮤니티 게시글
            </BoldText>
            <View>
                {communityItem &&
                    communityItem.map((res: any, idx: number) => {
                        return <HomeCommunityContents item={res} key={idx} idx={idx} />;
                    })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: "auto",
        borderRadius: 15,
    },
    titleText: {
        color: "#000",
        letterSpacing: -0.5,
    },
});

export default HomeCommunity;
