import { StackNavigationProp } from "@react-navigation/stack";
import { ImageSourcePropType } from "react-native";
import { UserType } from "./User";

export interface ItemInterface {
  image: string  | null;
  state: boolean;
  name: string;
  check: boolean | null;
  time: Date | null;
  content: string;
  userId : string | null;
}

export interface ChatInterface {
  image: ImageSourcePropType;
  name: string;
  state: boolean;
}

export interface ChatPropsType {
  image: string;
  name: string;
  room : number;
}

interface ListUserInterface extends UserType {
  profile: string;
}