import { StyleSheet, View, Dimensions } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import StartSvg from "../../assets/image/svg/illustration1.svg";
import theme from "../../theme";

const StartImage = () => {
  const deviceWidth = Dimensions.get("window").width;

  const svgWidth: number =
    deviceWidth - theme.container.paddingLeft - theme.container.paddingRight;

  return (
    <View
      style={[
        styles.container,
        theme.alignItemsCenter,
        theme.justifyContentCenter,
      ]}
    >
      <View style={[theme.pt3]}>
        <WithLocalSvg asset={StartSvg} width={svgWidth} height={"100%"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StartImage;
