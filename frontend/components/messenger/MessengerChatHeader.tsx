import { View, StyleSheet, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import theme from "../../theme";
import { ItemInterface } from "../../types/MessengerType";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import { BoldText, RegularText } from "../Text";
import { API_URL } from "@env";

const MessengerChatHeader = (
  navigation: ProfileScreenNavigationProp,
  route: any
) => {
  const { image, name, state }: ItemInterface = route.params;

  return (
    <View
      style={[
        theme.justifyContentBetween,
        theme.alignItemsCenter,
        theme.flexDirectionRow,
        styles.container,
      ]}
    >
      <View style={[theme.flexDirectionRow, theme.alignItemsCenter]}>
        <Entypo
          name="chevron-left"
          onPress={() => navigation.pop()}
          size={theme.headerIconSize}
          color={theme.colors.purple}
        />
        <View
          style={[
            theme.justifyContentCenter,
            theme.alignItemsCenter,
            styles.imageContainer,
            theme.ml2,
          ]}
        >
          {!image ? (
            <Image
              source={require("../../assets/image/profile/default.jpg")}
              style={[styles.image]}
            />
          ) : (
            <Image source={{ uri: API_URL + "/files/profile/"+ image }} style={[styles.image]} />
          )}
        </View>
        <View style={[theme.ml2]}>
          <BoldText style={[theme.fontXl, styles.name]}>{name}</BoldText>
          <View style={[theme.flexDirectionRow, theme.alignItemsCenter]}>
            <View
              style={[
                styles.state,
                { backgroundColor: state ? "#1AB104" : "#777" },
                theme.mr1,
              ]}
            ></View>
            <RegularText
              style={[{ color: state ? "#1AB104" : "#777" }, theme.fontBase]}
            >
              {state ? "활동중" : "다른 용무중"}
            </RegularText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    paddingLeft: 0,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  state: {
    width: 13,
    height: 13,
    zIndex: 10,
    borderRadius: 100,
  },
  name: {
    color: "#333",
  },
});

export default MessengerChatHeader;
