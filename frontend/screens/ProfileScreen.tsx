import ProfileInformation from "../components/profile/ProfileInformation";
import { SafeAreaView, StyleSheet , View} from "react-native";
import theme from "../theme";
import ProfileInfoItem from "../components/profile/ProfileInfoItem";


const ProfileScreen = () => {
  return (
    <SafeAreaView style={[styles.container, theme.pb4]}>
      <ProfileInformation />
      <View style={[theme.container , theme.mt3]}>
        <ProfileInfoItem />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundWhite,
  },
  
});

export default ProfileScreen;
