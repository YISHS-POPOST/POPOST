import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import HomeCommunity from "../components/home/HomeCommunity";
import HomeMessenger from "../components/home/HomeMessenger";
import HomeNote from "../components/home/HomeNote";
import theme from "../theme";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "@env";
import { useSelector } from "react-redux";
import { StateInterface } from "../src/type/state";
import { ProfileItemPayload } from "../types/User";
import { ListUserInterface } from "../types/MessengerType";
import { Message } from "../components/messenger/MessengerList";
import HomeLoading from "../components/loading/HomeLoading";

export interface MessengerRooms {
  id: number;
  follow_id: string;
  follower_id: string;
  createUser?: ListUserInterface;
  inviteUser?: ListUserInterface;
  message: null | Message;
}

export interface HomeItemPayload extends ProfileItemPayload {
  NoteCnt: number;
  MessengerRooms: MessengerRooms[];
}

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [homeItem, setHomeItem] = useState<HomeItemPayload | null>(null);
  const [communityItem, setCommunityItem] = useState([]);
  const users = useSelector((state: StateInterface) => state.users);

  const loadData = async () => {
    await axios.get(API_URL + "/users/home/" + users.id).then(res => {
      setHomeItem(res.data);
    });
    await axios.post(API_URL + "/users/home/community").then(res => {
      setCommunityItem(res.data);
      setIsLoading(true);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return !homeItem || !communityItem ? (
    <HomeLoading />
  ) : !isLoading ? (
    <HomeLoading />
  ) : (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={[{ backgroundColor: theme.colors.backgroundWhite }]}
    >
      <SafeAreaView style={[theme.mainContainer, styles.bg]}>
        <HomeCommunity communityItem={communityItem} />
        <HomeMessenger homeItem={homeItem} />
      </SafeAreaView>
      <HomeNote homeItem={homeItem} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: theme.colors.backgroundWhite,
  },
  titleText: {
    color: "#000",
    letterSpacing: -0.5,
  },
});

export default HomeScreen;
