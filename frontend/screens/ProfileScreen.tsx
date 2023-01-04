import { StyleSheet, View, ScrollView, Text } from "react-native";
import theme from "../theme";
import ProfileItems from "../components/profile/ProfileItems";
import ProfileInformation from "../components/profile/ProfileInformation";
import ProfileActivities from "../components/profile/ProfileActivities";
import CommunityWriteBtn from "../components/community/CommunityWriteBtn";
import { ProfileScreenNavigationProp } from "../types/NavigateType";
import ProfileLogout from "../components/profile/ProfileLogout";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "@env";
import { useSelector } from "react-redux";
import { StateInterface } from "../src/type/state";
import { ProfileItemPayload } from "../types/User";
import ProfileLoadingScreen from "./loading/ProfileLoadingScreen";

const ProfileScreen = ({ navigation }: ProfileScreenNavigationProp) => {
  const [profileItem, setProfileItem] = useState<ProfileItemPayload>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const users = useSelector((state: StateInterface) => state.users);

  const loadProfileItem = async () => {
    await axios.get(API_URL + "/users/profile/" + users.id).then(res => {
      setProfileItem(res.data);
      setIsLoading(true);
    });
  };

  useEffect(() => {
    loadProfileItem();
  }, []);

  return !users ? (
    <ProfileLoadingScreen />
  ) : !isLoading ? (
    <ProfileLoadingScreen />
  ) : !profileItem ? (
    <ProfileLoadingScreen />
  ) : (
    <View>
      <ScrollView
        style={[styles.container, theme.pb4]}
        showsVerticalScrollIndicator={false}
      >
        <ProfileInformation />
        <ProfileItems profileItem={profileItem} />
        <ProfileActivities profileItem={profileItem} />
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
