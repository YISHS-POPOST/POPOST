import theme from "../../../theme";
import { StyleSheet, TouchableOpacity , SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { StateInterface } from "../../../src/type/state";
import Entypo from "react-native-vector-icons/Entypo";
import { BoldText } from "../../Text";

interface props {
  navigate: string;
}

const ProfileEditNextButton = ({ navigate }: props) => {
  const navigation = useSelector((state: StateInterface) => state.navigation);

  return (
    <SafeAreaView
      style={[
        theme.mb5,
        styles.nextBtn,
        theme.sectionBorderRadius,
        theme.pt2,
        theme.pb2,
        theme.alignItemsCenter,
        theme.justifyContentCenter,
      ]}
    >
      <TouchableOpacity
        style={[
          theme.mt5,
          styles.nextBtnContent,
          theme.justifyContentCenter,
          theme.alignItemsCenter,
          theme.sectionBorderRadius,
          theme.pt2,
          theme.pb2,
          theme.flexDirectionRow,
        ]}
        onPress={() => {
          navigation.navigate(navigate);
        }}
      >
        <BoldText style={[styles.nextTitle, theme.fontXl]}>다음으로</BoldText>
        <Entypo
          name="arrow-with-circle-right"
          style={[theme.ml1]}
          size={25}
          color="#fff"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nextBtnContent: {
    width: "100%",
    textAlign: "center",
    backgroundColor: theme.colors.purple,
  },
  nextTitle: {
    color: "#fff",
  },
  nextBtn: {
    width: "100%",
  },
});
export default ProfileEditNextButton;
