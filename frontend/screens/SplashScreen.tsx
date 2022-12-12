import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProfileScreenNavigationProp } from "../types/NavigateType";
import StartLoading from "../components/loading/StartLoading";

const SplashScreen = ({ navigation }: ProfileScreenNavigationProp) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem("user_id").then(value =>
        navigation.replace(value === null ? "Auth" : "Main")
      );
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StartLoading />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#307ecc",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
