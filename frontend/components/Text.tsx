import { Text, View } from "react-native";
import theme from "../theme";
import { StyleProp, TextStyle } from "react-native";

interface PropType {
  children: string;
  style ?: StyleProp<TextStyle> | null;
}

export const BoldText = (props: PropType) => {
  const { children, style } = props;
  return <Text style={[theme.fontWeightBold, style]}>{children}</Text>;
};

export const BlackText = (props: PropType) => {
  const { children, style } = props;
  return <Text style={[theme.fontWeightBlack, style]}>{children}</Text>;
};

export const RegularText = (props: PropType) => {
  const { children, style } = props;
  return <Text style={[theme.fontWeightRegular, style]}>{children}</Text>;
};

export const ThinText = (props: PropType) => {
  const { children, style } = props;
  return <Text style={[theme.fontWeightThin, style]}>{children}</Text>;
};
