import {View , StyleSheet} from "react-native";
import { WithLocalSvg } from "react-native-svg";
import LogoTextSvg from "../../assets/image/svg/logo_text.svg";
import theme from "../../theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
        <WithLocalSvg asset={LogoTextSvg} width={100} height={"100%"} />
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