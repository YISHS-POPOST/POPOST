import { StackNavigationProp } from "@react-navigation/stack";
import { ImageSourcePropType } from "react-native";
import { UserType } from "./User";

export interface ItemInterface {
  image: string;
  state: boolean;
  name: string;
  check: boolean;
  time: Date;
  content: string;
  userId : string;
}

export interface ChatInterface {
  image: ImageSourcePropType;
  name: string;
  state: boolean;
}

export interface ChatPropsType {
  image: string;
  name: string;
}

interface ListUserInterface extends UserType {
  profile: string;
}