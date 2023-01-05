import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import Skeleton from "../../assets/component/Skeleton";

const HomeLoadingMessenger = () => {
  return (
    <View style={[theme.mt3, theme.alignItemsCenter, theme.flexDirectionRow]}>
      <Skeleton width={50} height={50} style={[{ borderRadius: 100 }]} />
      <View style={[theme.ml3]}>
        <Skeleton width={100} height={20} style={[theme.sectionBorderRadius]} />
        <Skeleton
          width={200}
          height={20}
          style={[theme.sectionBorderRadius, theme.mt1]}
        />
      </View>
    </View>
  );
};

const HomeLoadingCommunityItem = () => {
  return (
    <View style={[theme.pt2, theme.pb2]}>
      <Skeleton width={100} height={20} style={[theme.sectionBorderRadius]} />
      <Skeleton
        width={300}
        height={20}
        style={[theme.sectionBorderRadius, theme.mt2]}
      />
      <Skeleton
        width={300}
        height={20}
        style={[theme.sectionBorderRadius, theme.mt2]}
      />
      <View
        style={[
          theme.flexDirectionRow,
          theme.alignItemsCenter,
          theme.justifyContentBetween,
        ]}
      >
        <Skeleton
          width={100}
          height={20}
          style={[theme.sectionBorderRadius, theme.mt2]}
        />
        <Skeleton
          width={50}
          height={20}
          style={[theme.sectionBorderRadius, theme.mt2]}
        />
      </View>
    </View>
  );
};

const HomeLoading = () => {
  return (
    <View
      style={[
        theme.mainContainer,
        { backgroundColor: theme.colors.backgroundWhite },
      ]}
    >
      <View
        style={[
          styles.container,
          theme.sectionBorderRadius,
          theme.p4,
          theme.mt3,
        ]}
      >
        <Skeleton
          width={200}
          height={30}
          style={[theme.sectionBorderRadius, theme.mb3]}
        />
        <HomeLoadingCommunityItem />
        <HomeLoadingCommunityItem />
      </View>
      <View
        style={[
          styles.container,
          theme.sectionBorderRadius,
          theme.p4,
          theme.mt3,
        ]}
      >
        <View
          style={[
            theme.alignItemsCenter,
            theme.justifyContentBetween,
            theme.flexDirectionRow,
          ]}
        >
          <Skeleton
            width={150}
            height={30}
            style={[theme.sectionBorderRadius]}
          />
          <Skeleton
            width={50}
            height={30}
            style={[theme.sectionBorderRadius]}
          />
        </View>
        <HomeLoadingMessenger />
        <HomeLoadingMessenger />
        <HomeLoadingMessenger />
        <HomeLoadingMessenger />
        <HomeLoadingMessenger />
        <HomeLoadingMessenger />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
export default HomeLoading;
