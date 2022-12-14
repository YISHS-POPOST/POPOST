import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import theme from "../theme";
import ProfileItems from "../components/profile/ProfileItems";
import ProfileInformation from "../components/profile/ProfileInformation";
import ProfileActivities from "../components/profile/ProfileActivities";


const ProfileScreen = () => {
  return (
    <ScrollView style={[styles.container, theme.pb4]} showsVerticalScrollIndicator={false}>
      <ProfileInformation />
      <ProfileItems />
      <ProfileActivities />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundWhite,
  },
});

export default ProfileScreen;
