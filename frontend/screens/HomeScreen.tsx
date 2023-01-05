import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import HomeWeather from "../components/home/HomeWeather";
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

interface HomeItemPayload extends ProfileItemPayload {
  NoteCnt: number;
}

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [homeItem, setHomeItem] = useState<HomeItemPayload | null>(null);
  const users = useSelector((state: StateInterface) => state.users);

  const loadData = async () => {
    await axios.get(API_URL + "/users/home/" + users.id).then(res => {
      setHomeItem(res.data);
      setIsLoading(true);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={[{ backgroundColor: theme.colors.backgroundWhite }]}
    >
      <SafeAreaView style={[theme.mainContainer, styles.bg]}>
        <HomeWeather />
        <HomeCommunity />
        <HomeMessenger />
      </SafeAreaView>
      <HomeNote />
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
