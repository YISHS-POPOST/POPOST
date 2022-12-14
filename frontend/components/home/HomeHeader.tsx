import {View , StyleSheet} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import LogoTextSvg from "../../assets/image/svg/logo.svg";
import theme from "../../theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { BlackText, BoldText } from "../Text";

const HomeHeader = () => {
    return (
      <View
        style={[
          styles.container,
          theme.justifyContentBetween,
          theme.alignItemsCenter,
          theme.headerHeight
        ]}
      >
        <View style={[theme.alignItemsCenter , theme.flexDirectionRow]}>
          <WithLocalSvg asset={LogoTextSvg} width={40} height={40} style={[{opacity:.5}]} />
          <BlackText style={[{color : '#666' , letterSpacing : -.5}  , theme.fontXxxl , theme.ml1]}>POPOST</BlackText>
        </View>
        <View>
          <MaterialCommunityIcons
            name="bell-outline"
            size={theme.headerIconSize}
            color={"#555"}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    flex : 1,
    width : '100%'
  },
});

export default HomeHeader;