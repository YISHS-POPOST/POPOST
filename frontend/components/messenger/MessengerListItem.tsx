import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";
import theme from "../../theme";
import { BoldText, RegularText } from "../Text";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ItemInterface } from "../../types/MessengerType";


// 사진 , 상태 , 이름 , 확인 , 시간 , 마지막 메신저
const MessengerListItem = ({image , state , name , check , time , content}  : ItemInterface) => {

  return (
    <View
      style={[
        styles.item,
        theme.pt1,
        theme.pb1,
        theme.mt2,
        theme.mb2,
        theme.flexDirectionRow,
      ]}
    >
      <View style={[theme.positionRelative, styles.imgContainer]}>
        <View
          style={[
            styles.imageBox,
            theme.justifyContentCenter,
            theme.alignItemsCenter,
          ]}
        >
          <Image
            source={image}
            style={[styles.image]}
          />
        </View>
        <View style={[styles.state]}></View>
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
            <RegularText>19:32</RegularText>
          </View>
        </View>
        <RegularText>{content}</RegularText>
      </View>
    </View>
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
    backgroundColor: "#1AB104",
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
});

export default MessengerListItem;
