import { StyleSheet } from "react-native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const colors = {
  red: "#F0305E",
  blue: "#164AFF",
  softBlue: "#DDE1F2",
  purple: "#7C42FF",
  backgroundWhite: "#F6F7FB",
};

const verticalContainer = {
  base: 25,
};



const styles = StyleSheet.create({
  fontSmall: {
    fontSize: 14,
  },
  fontBase: {
    fontSize: 16,
  },
  fontLg: {
    fontSize: 18,
  },
  fontXl: {
    fontSize: 20,
  },
  fontXxl: {
    fontSize: 22,
  },
  fontXxxl: {
    fontSize: 24,
  },
  fontTitleSize: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    paddingLeft: verticalContainer.base,
    paddingRight: verticalContainer.base,
  },
  fontWeightBold: {
    fontFamily: "Pretendard-Bold",
  },
  fontWeightBlack: {
    fontFamily: "Pretendard-Black",
  },
  fontWeightRegular: {
    fontFamily: "Pretendard-Regular",
  },
  fontWeightThin: {
    fontFamily: "Pretendard-Thin",
  },
  mt1: {
    marginTop: 7,
  },
  mt2: {
    marginTop: 14,
  },
  mt3: {
    marginTop: 21,
  },
  mt4: {
    marginTop: 28,
  },
  mt5: {
    marginTop: 35,
  },
  mb1: {
    marginBottom: 7,
  },
  mb2: {
    marginBottom: 14,
  },
  mb3: {
    marginBottom: 21,
  },
  mb4: {
    marginBottom: 28,
  },
  mb5: {
    marginBottom: 35,
  },
  ml1: {
    marginLeft: 7,
  },
  ml2: {
    marginLeft: 14,
  },
  ml3: {
    marginLeft: 21,
  },
  ml4: {
    marginLeft: 28,
  },
  ml5: {
    marginLeft: 35,
  },
  mr1: {
    marginRight: 7,
  },
  mr2: {
    marginRight: 14,
  },
  mr3: {
    marginRight: 21,
  },
  mr4: {
    marginRight: 28,
  },
  mr5: {
    marginRight: 35,
  },
  pt1: {
    paddingTop: 7,
  },
  pt2: {
    paddingTop: 14,
  },
  pt3: {
    paddingTop: 21,
  },
  pt4: {
    paddingTop: 28,
  },
  pt5: {
    paddingTop: 35,
  },
  pb1: {
    paddingBottom: 7,
  },
  pb2: {
    paddingBottom: 14,
  },
  pb3: {
    paddingBottom: 21,
  },
  pb4: {
    paddingBottom: 28,
  },
  pb5: {
    paddingBottom: 35,
  },
  pl1: {
    paddingLeft: 7,
  },
  pl2: {
    paddingLeft: 14,
  },
  pl3: {
    paddingLeft: 21,
  },
  pl4: {
    paddingLeft: 28,
  },
  pl5: {
    paddingLeft: 35,
  },
  pr1: {
    paddingRight: 7,
  },
  pr2: {
    paddingRight: 14,
  },
  pr3: {
    paddingRight: 21,
  },
  pr4: {
    paddingRight: 28,
  },
  pr5: {
    paddingRight: 35,
  },
  flexDirectionColumn: {
    flexDirection: "column",
  },
  flexDirectionRow: {
    flexDirection: "row",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignItemsStart: {
    alignItems: "flex-start",
  },
  alignItemsEnd: {
    alignItems: "flex-end",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentStart: {
    justifyContent: "flex-start",
  },
  justifyContentEnd: {
    justifyContent: "flex-end",
  },
  justifyContentBetween: {
    justifyContent: "space-between",
  },
  positionRelative: {
    position: "relative",
  },
  positionAbsolute: {
    position: "absolute",
  },
});

const headerOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: "center",
  headerTitleStyle: styles.fontWeightBold,
  contentStyle: {
    backgroundColor: colors.backgroundWhite,
  },
  headerStyle : {
    backgroundColor : colors.backgroundWhite,
  },
  headerShadowVisible : false,
};

const theme = {
  colors,
  verticalContainer,
  ...styles,
  headerOptions,
};

export default theme;
