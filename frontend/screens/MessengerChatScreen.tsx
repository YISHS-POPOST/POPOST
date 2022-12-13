import { useEffect } from "react";
import { ImageSourcePropType, View } from "react-native";
import { ItemInterface } from "../types/MessengerType";
import { RouteProp } from "@react-navigation/native";
import { NativeStackDescriptor } from "@react-navigation/native-stack/lib/typescript/src/types";
import MessengerChatHeader from "../components/messenger/MessengerChatHeader";

const MessengerChatScreen = ({ route }: any) => {
  const { image, name, state }: ItemInterface = route.params;

  return (
    <View>
    </View>
  );
};

export default MessengerChatScreen;
