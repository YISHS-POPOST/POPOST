import { View, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../Text";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomeMessengerContents from "./HomeMessengerContents";
import { HomeItemPayload, MessengerRooms } from "../../screens/HomeScreen";
import { useSelector } from "react-redux";
import { StateInterface } from "../../src/type/state";
import HomeMessengerEmpty from "./HomeMessengerEmpty";

interface Prop {
  homeItem: HomeItemPayload;
}

const HomeMessenger = ({ homeItem }: Prop) => {
  const navigation = useSelector((state: StateInterface) => state.navigation);

  const messengerNavigation = () => {
    navigation.navigate("messenger");
  };

  return (
    <View style={[styles.container, theme.p4, theme.mt3]}>
      <View style={[theme.justifyContentBetween, theme.flexDirectionRow]}>
        <BoldText style={[styles.boldText, theme.fontXl]}>메신저</BoldText>
        <View
          style={[
            theme.flexDirectionRow,
            theme.justifyContentEnd,
            theme.alignItemsCenter,
          ]}
        >
          <TouchableOpacity
            style={[theme.flexDirectionRow, theme.alignItemsCenter]}
            onPress={messengerNavigation}
          >
            <Icon
              name="keyboard-arrow-right"
              size={15}
              style={[styles.nextText]}
            />
            <RegularText style={[styles.nextText, theme.fontSmall]}>
              더보기
            </RegularText>
          </TouchableOpacity>
        </View>
      </View>
      {homeItem.MessengerRooms.length === 0 ? (
        <HomeMessengerEmpty />
      ) : (
        <View style={[styles.subContainer, theme.mt3]}>
          {homeItem.MessengerRooms.map((item: MessengerRooms, idx) => {
            return <HomeMessengerContents contentItem={item} key={idx} />;
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  subContainer: {},
  boldText: {
    color: "#000",
    letterSpacing: -0.5,
    lineHeight: 35,
  },
  nextText: {
    color: "#999",
    letterSpacing: -0.5,
  },
});

export default HomeMessenger;
