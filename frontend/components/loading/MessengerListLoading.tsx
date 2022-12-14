import { View, StyleSheet } from "react-native";
import Skeleton from "../../assets/component/Skeleton";
import theme from "../../theme";

const MessengerListLoadingItem = () => {
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
      <Skeleton width={70} height={70} style={[styles.imageBox]} />
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
          <Skeleton
            width={100}
            height={30}
            style={[theme.sectionBorderRadius]}
          />
          <Skeleton
            width={50}
            height={30}
            style={[theme.sectionBorderRadius]}
          />
        </View>
        <Skeleton width={230} height={20} style={{borderRadius : 20,}} />
      </View>
    </View>
  );
};

const MessengerListLoading = () => {
  return (
    <View style={[theme.container, theme.flexDirectionColumn]}>
      <MessengerListLoadingItem />
      <MessengerListLoadingItem />
      <MessengerListLoadingItem />
      <MessengerListLoadingItem />
      <MessengerListLoadingItem />
      <MessengerListLoadingItem />
      <MessengerListLoadingItem />
      <MessengerListLoadingItem />
      <MessengerListLoadingItem />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
  },
  imageBox: {
    borderRadius: 100,
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

export default MessengerListLoading;
