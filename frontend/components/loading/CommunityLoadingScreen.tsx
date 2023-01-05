import { View, StyleSheet } from "react-native";
import Skeleton from "../../assets/component/Skeleton";
import theme from "../../theme";

const CommunityLoadingItem = () => {
    return (
        <View style={theme.mt2}>
            <View style={[theme.mt2]}>
                <View style={[theme.pt2,theme.flexDirectionRow,theme.justifyContentBetween,]}>
                <View style={[theme.flexDirectionRow,theme.justifyContentStart,theme.alignItemsCenter,]}>
                    <Skeleton width={50} height={50} style={[styles.image]} />
                    <View style={theme.ml2}>
                        <Skeleton width={40} height={12} style={[theme.sectionBorderRadius, {marginBottom: 4,}]} />
                        <Skeleton width={120} height={12} style={[theme.sectionBorderRadius, {marginBottom: 4,}]} />
                        <Skeleton width={90} height={12} style={[theme.sectionBorderRadius, {marginBottom: 4,}]} />
                    </View>
                    <View style={[theme.justifyContentCenter]}>
                        <Skeleton width={10} height={12} style={[theme.sectionBorderRadius, {marginLeft: 40,}]} />
                    </View>
                </View>
                </View>
                <View style={[{marginTop: 50,}, theme.mb2]}>
                    <Skeleton width={250} height={16} style={[theme.sectionBorderRadius, theme.mb3]} />
                    <Skeleton width={300} height={12} style={[theme.sectionBorderRadius, theme.mb1]} />
                    <Skeleton width={300} height={12} style={[theme.sectionBorderRadius]} />
                </View>
                <View style={[{marginTop: 80,}, theme.flexDirectionRow]}>
                    <Skeleton width={60} height={20} style={[theme.sectionBorderRadius, theme.mr2]} />
                    <Skeleton width={45} height={20} style={[theme.sectionBorderRadius]} />
                </View>
            </View>
            <View style={{marginTop: 230}}>
                <View style={[theme.pt2,theme.flexDirectionRow,theme.justifyContentBetween,]}>
                <View style={[theme.flexDirectionRow,theme.justifyContentStart,theme.alignItemsCenter,]}>
                    <Skeleton width={50} height={50} style={[styles.image]} />
                    <View style={theme.ml2}>
                        <Skeleton width={40} height={12} style={[theme.sectionBorderRadius, {marginBottom: 4,}]} />
                        <Skeleton width={120} height={12} style={[theme.sectionBorderRadius, {marginBottom: 4,}]} />
                        <Skeleton width={90} height={12} style={[theme.sectionBorderRadius, {marginBottom: 4,}]} />
                    </View>
                    <View style={[theme.justifyContentCenter]}>
                        <Skeleton width={10} height={12} style={[theme.sectionBorderRadius, {marginLeft: 40,}]} />
                    </View>
                </View>
                </View>
                <View style={[{marginTop: 50,}, theme.mb2]}>
                    <Skeleton width={250} height={16} style={[theme.sectionBorderRadius, theme.mb3]} />
                    <Skeleton width={300} height={12} style={[theme.sectionBorderRadius, theme.mb1]} />
                    <Skeleton width={300} height={12} style={[theme.sectionBorderRadius]} />
                </View>
                <View style={[{marginTop: 80,}, theme.flexDirectionRow]}>
                    <Skeleton width={60} height={20} style={[theme.sectionBorderRadius, theme.mr2]} />
                    <Skeleton width={45} height={20} style={[theme.sectionBorderRadius]} />
                </View>
            </View>
            <View style={{marginTop: 230}}>
                <View style={[theme.pt2,theme.flexDirectionRow,theme.justifyContentBetween,]}>
                <View style={[theme.flexDirectionRow,theme.justifyContentStart,theme.alignItemsCenter,]}>
                    <Skeleton width={50} height={50} style={[styles.image]} />
                    <View style={theme.ml2}>
                        <Skeleton width={40} height={12} style={[theme.sectionBorderRadius, {marginBottom: 4,}]} />
                        <Skeleton width={120} height={12} style={[theme.sectionBorderRadius, {marginBottom: 4,}]} />
                        <Skeleton width={90} height={12} style={[theme.sectionBorderRadius, {marginBottom: 4,}]} />
                    </View>
                    <View style={[theme.justifyContentCenter]}>
                        <Skeleton width={10} height={12} style={[theme.sectionBorderRadius, {marginLeft: 40,}]} />
                    </View>
                </View>
                </View>
                <View style={[{marginTop: 50,}, theme.mb2]}>
                    <Skeleton width={250} height={16} style={[theme.sectionBorderRadius, theme.mb3]} />
                    <Skeleton width={300} height={12} style={[theme.sectionBorderRadius, theme.mb1]} />
                    <Skeleton width={300} height={12} style={[theme.sectionBorderRadius]} />
                </View>
                <View style={[{marginTop: 80,}, theme.flexDirectionRow]}>
                    <Skeleton width={60} height={20} style={[theme.sectionBorderRadius, theme.mr2]} />
                    <Skeleton width={45} height={20} style={[theme.sectionBorderRadius]} />
                </View>
            </View>
        </View>
        
    );
}

const CommunityLoadingScreen = () => {
    return (
        <View style={[theme.flexDirectionColumn]}>
            <CommunityLoadingItem />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      paddingLeft: 15,
      paddingRight: 15,
    },
    text: {
      letterSpacing: -0.5,
    },
    textLineHeight: {
      lineHeight: 17,
    },
    black: {
      color: "#000",
    },
    gray: {
      color: "#6d6d6d",
    },
    image: {
      borderRadius: 100,
    },
    icon: {
      color: "#7e7e7e",
  },
  });
export default CommunityLoadingScreen;