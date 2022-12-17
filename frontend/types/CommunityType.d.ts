import { StackNavigationProp } from "@react-navigation/stack";
import { ImageSourcePropType } from "react-native";

export interface ItemInterface {
    user_image:ImageSourcePropType;
    user_name: string;
    user_nickname: string;
    create_dt: string;
    title: string;
    content: string;
    link:string;
    comment:number;
    view:number;
}