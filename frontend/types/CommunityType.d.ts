import { StackNavigationProp } from "@react-navigation/stack";
import { ImageSourcePropType } from "react-native";

export interface ItemInterface {
    user_image:ImageSourcePropType;
    "user.name": string;
    create_dt: string;
    title: string;
    contents: string;
    link:string;
    comment:number;
    view:number;
}