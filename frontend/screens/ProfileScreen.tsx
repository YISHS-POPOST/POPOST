import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import theme from "../theme";
import ProfileItems from "../components/profile/ProfileItems";
import ProfileInformation from "../components/profile/ProfileInformation";
import ProfileActivities from "../components/profile/ProfileActivities";
import CommunityWriteBtn from "../components/community/CommunityWriteBtn";
import { ProfileScreenNavigationProp } from "../types/NavigateType";
import ProfileLogout from "../components/profile/ProfileLogout";

const ProfileScreen = ({ navigation }: ProfileScreenNavigationProp) => {
  return (
    <View>
      <ScrollView
        style={[styles.container, theme.pb4]}
        showsVerticalScrollIndicator={false}
      >
        <ProfileInformation />
        <ProfileItems />
        <ProfileActivities />
        <ProfileLogout navigation={navigation} />
      </ScrollView>
      <CommunityWriteBtn navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundWhite,
  },
});

export default ProfileScreen;
