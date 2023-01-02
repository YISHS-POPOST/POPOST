import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../Text";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ItemInterface } from "../../types/MessengerType";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import { API_URL } from "@env";

interface ListInterface extends ItemInterface {
  navigation: ProfileScreenNavigationProp;
  userId : string;
}

// 사진 , 상태 , 이름 , 확인 , 시간 , 마지막 메신저

const MessengerListItem = ({
  image,
  state,
  name,
  check,
  time,
  content,
  navigation,
  userId,
}: ListInterface) => {
  const nowDate = new Date();
  const timeTxt =
    time.getDate() === nowDate.getDate() &&
    time.getMonth() === nowDate.getMonth()
      ? `${time.getHours()}:${
          time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
        }`
      : time.getDate() === nowDate.getDate() - 1 &&
        time.getMonth() === nowDate.getMonth()
      ? "Yesterday"
      : `${time.getMonth() + 1}월 ${time.getDate()}일`;
        
  return (
    <TouchableOpacity
      style={[
        styles.item,
        theme.pt1,
        theme.pb1,
        theme.mt2,
        theme.mb2,
        theme.flexDirectionRow,
        theme.container,
      ]}
      onPress={() => {
        navigation.navigate("MessengerChat", { image, name, state , userId });
      }}
    >
      <View style={[theme.positionRelative, styles.imgContainer]}>
        <View
          style={[
            styles.imageBox,
            theme.justifyContentCenter,
            theme.alignItemsCenter,
          ]}
        >
          {!image ? (
            <Image
              source={require("../../assets/image/profile/default.jpg")}
              style={[styles.image]}
            />
          ) : (
            <Image
              source={{ uri: API_URL + "/files/profile/" + image }}
              style={[styles.image]}
            />
          )}
        </View>
      </View>
      <View
        style={[
          styles.content,
          theme.pl2,
          theme.pr2,
          theme.justifyContentBetween,
        ]}
      >
        <View
          style={[
            theme.justifyContentBetween,
            theme.alignItemsCenter,
            theme.flexDirectionRow,
          ]}
        >
          <BoldText style={[styles.nameText, theme.fontXl]}>{name}</BoldText>
          <View style={[theme.flexDirectionRow, theme.alignItemsCenter]}>
            <MaterialCommunityIcons
              name={check ? "check-circle" : "check-circle-outline"}
              size={20}
              style={[theme.mr1]}
            />
            <RegularText>{timeTxt}</RegularText>
          </View>
        </View>
        <RegularText style={[styles.contentText, theme.fontBase]}>
          {content.length > 40 ? content.substring(0, 40) + "..." : content}
        </RegularText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 70,
  },
  imageBox: {
    borderRadius: 100,
    height: 70,
    width: 70,
    overflow: "hidden",
  },
  content: {
    flex: 1,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  nameText: {
    color: "#000",
  },
  state: {
    position: "absolute",
    width: 25,
    height: 25,
    zIndex: 10,
    borderRadius: 100,
    left: 50,
    top: 45,
    borderWidth: 3,
    borderColor: "#fff",
  },
  imgContainer: {
    width: 70,
    height: 70,
  },
  contentText: {
    color: "#666",
  },
});

export default MessengerListItem;
