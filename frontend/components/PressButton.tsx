import {
  Pressable,
  StyleSheet,
  StyleProp,
  PressableProps,
} from "react-native";
import theme from "../theme";
import { BoldText } from "./Text";
import { useState } from "react";

interface propsType extends PressableProps {
  content: string;
  style: StyleProp<any>;
  textStyle: StyleProp<any>;
  onPress?: () => void;
}

const PressButton = (props: propsType) => {
  const { style, content, textStyle, onPress } = props;
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <Pressable
      style={[
        theme.alignItemsCenter,
        theme.pt2,
        theme.pb2,
        styles.button,
        style,
        { opacity: pressed ? 0.5 : 1 },
        theme.mt1,
        theme.mb1,
      ]}
      onPressIn={() => {
        setPressed(true);
      }}
      onPress={() => {
        if (onPress) onPress();
        setPressed(false);
      }}
      onPressOut={() => {
        setPressed(false);
      }}
    >
      <BoldText style={[theme.fontXl, textStyle]}>{content}</BoldText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  button: {
    borderRadius: 13,
  },
});

export default PressButton;
