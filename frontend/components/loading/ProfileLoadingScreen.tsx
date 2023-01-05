import { View, StyleSheet, Dimensions } from "react-native";
import Skeleton from "../../assets/component/Skeleton";
import theme from "../../theme";

const ProfileLoadingScreen = () => {
  const maxWidth = Dimensions.get("window").width - 50;

  return (
    <View style={[styles.container, theme.container]}>
      <Skeleton
        width={140}
        height={140}
        style={[styles.imageView, theme.mt5]}
      />
      <Skeleton
        width={150}
        height={40}
        style={[theme.mt2, { borderRadius: 20 }]}
      />
      <Skeleton
        width={200}
        height={30}
        style={[theme.mt2, { borderRadius: 20 }]}
      />
      <Skeleton
        width={maxWidth}
        height={50}
        style={[theme.mt5, { borderRadius: 20 }]}
      />
      <Skeleton
        width={maxWidth}
        height={70}
        style={[theme.mt5, { borderRadius: 20 }]}
      />
      <Skeleton
        width={maxWidth}
        height={70}
        style={[theme.mt5, { borderRadius: 20 }]}
      />
      <Skeleton
        width={maxWidth}
        height={70}
        style={[theme.mt5, { borderRadius: 20 }]}
      />
      <Skeleton
        width={maxWidth}
        height={70}
        style={[theme.mt5, { borderRadius: 20 }]}
      />
      <Skeleton
        width={maxWidth}
        height={70}
        style={[theme.mt5, { borderRadius: 20 }]}
      />
      <Skeleton
        width={maxWidth}
        height={70}
        style={[theme.mt5, { borderRadius: 20 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageView: {
    borderRadius: 20,
    overflow: "hidden",
    width: 140,
    height: 140,
  },
  
});

export default ProfileLoadingScreen;
