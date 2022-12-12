import {View , StyleSheet} from "react-native";
import theme from "../../theme";
import { WithLocalSvg } from "react-native-svg";
import LogoSvg from "../../assets/image/svg/logo.svg";

const StartLoading = () => {
    return (
      <View style={[theme.justifyContentCenter, theme.alignItemsCenter]}>
        <WithLocalSvg asset={LogoSvg} width={100} height={"100%"} />
      </View>
    );
}

export default StartLoading;