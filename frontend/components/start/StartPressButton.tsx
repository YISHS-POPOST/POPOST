import { Pressable, StyleSheet } from "react-native";
import theme from "../../theme";
import { BoldText } from "../Text";
import { useState } from "react";

interface propsType {
  backgroundColor: string;
  content: string;
}

const StartPressButton = (props: propsType) => {
  const { backgroundColor, content } = props;
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <Pressable
      style={[
        theme.alignItemsCenter,
        theme.pt2,
        theme.pb2,
        styles.button,
        { backgroundColor, opacity: pressed ? 0.5 : 1 },
        theme.mt1,
        theme.mb1,
      ]}
      onPressIn={() => {
        setPressed(true);
      }}
      onPress={() => {
        setPressed(false);
      }}
      onPressOut={() => {
        setPressed(false);
      }}
    >
      <BoldText style={[theme.fontXl, styles.buttonText]}>{content}</BoldText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  button: {
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
  },
});

export default StartPressButton;
