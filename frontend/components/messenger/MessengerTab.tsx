import { View, StyleSheet, Pressable } from "react-native";
import theme from "../../theme";
import { BoldText } from "../Text";
import { useState } from "react";

type tabType = "message" | "following";

const MessengerTab = () => {
  const [tab, setTab] = useState<tabType>("message");

  return (
    <View
      style={[
        styles.container,
        theme.alignItemsCenter,
        theme.flexDirectionRow,
        theme.justifyContentCenter,
        theme.mt3,
      ]}
    >
      <View
        style={[
          styles.buttonBack,
          theme.alignItemsCenter,
          theme.justifyContentCenter,
          theme.flexDirectionRow,
        ]}
      >
        <Pressable
          style={[
            styles.buttonBase,
            theme.alignItemsCenter,
            theme.justifyContentCenter,
            tab === "message" ? styles.activeButton : styles.button,
          ]}
          onPress={() => {
            setTab("message");
          }}
        >
          <BoldText
            style={[
              theme.fontBase,
              tab === "message" ? styles.activeFont : styles.yetFont,
            ]}
          >
            메시지
          </BoldText>
        </Pressable>
        <Pressable
          style={[
            styles.buttonBase,
            theme.alignItemsCenter,
            theme.justifyContentCenter,
            tab === "message" ? styles.button : styles.activeButton,
          ]}
          onPress={() => {
            setTab("following");
          }}
        >
          <BoldText
            style={[
              theme.fontBase,
              tab === "message" ? styles.yetFont : styles.activeFont,
            ]}
          >
            팔로잉
          </BoldText>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    backgroundColor: "#fff",
    color: "#000",
  },
  buttonBack: {
    height: "100%",
    borderColor: theme.colors.purple,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 3,
  },
  activeButton: {
    backgroundColor: theme.colors.purple,
    color: "#fff",
  },
  buttonBase: {
    width: 100,
    height: 40,
  },
  activeFont: {
    color: "#fff",
  },
  yetFont: {
    color: theme.colors.purple,
  },
});

export default MessengerTab;
