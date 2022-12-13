import { StackNavigationProp } from "@react-navigation/stack";
import { ImageSourcePropType } from "react-native";

export interface ItemInterface {
  image: ImageSourcePropType;
  state: boolean;
  name: string;
  check: boolean;
  time: Date;
  content: string;
}

export interface ChatInterface {
  image: ImageSourcePropType;
  name: string;
  state: boolean;
}