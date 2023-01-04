import { useEffect, useRef } from "react";
import { FlatList } from "react-native";
import theme from "../../theme";
import MessengerChatOther from "./MessengerChatOther";
import { ChatPropsType } from "../../types/MessengerType";
import MessengerChatMine from "./MessengerChatMine";
import { useState } from "react";
import { useSelector } from "react-redux";
import { StateInterface } from "../../src/type/state";
import axios from "axios";
import { API_URL } from "@env";

interface ChatContent {
  time: Date;
  content: string;
  mine: boolean;
}

type renderItemType = { item: ChatContent };

type getMessageDataItem = {
  id: number;
  created_at: Date;
  user_id: string;
  content: string;
  room_id: number;
  check: boolean;
};

const MessengerChatContent = ({ image, name, room }: ChatPropsType) => {
  const flatListRef = useRef<FlatList>(null);
  const [data, setData] = useState<ChatContent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const socket = useSelector((state: StateInterface) => state.socket);
  const users = useSelector((state: StateInterface) => state.users);

  const getMessageData = async () => {
    await axios.get(API_URL + "/messages/" + room).then(res => {
      const manufactureDataItem = res.data.map((item: getMessageDataItem) => {
        return {
          time: new Date(item.created_at),
          mine: users.id === item.user_id ? true : false,
          content: item.content,
        };
      });
      setData(manufactureDataItem);
      // 로딩 해제
      setIsLoading(true);
      scrollDown();
    });
  };

  useEffect(() => {
    getMessageData();
    socket.on("get message", (messageData: any) => {
      const contentPayload: ChatContent = {
        time: new Date(messageData.timeSet),
        content: messageData.content,
        mine: messageData.userId === users.id ? true : false,
      };
      setData(old => [...old, contentPayload]);
      scrollDown();
    });
  }, []);

  const scrollDown = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const renderItem = ({ item }: renderItemType) => {
    const { content, time, mine } = item;
      scrollDown();
    
    return mine ? (
      <MessengerChatMine time={time} content={content} />
    ) : (
      <MessengerChatOther
        name={name}
        image={image}
        time={time}
        content={content}
        room={room}
      />
    );
  };

  return (
    <FlatList
      data={data}
      style={[theme.container]}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ref={flatListRef}
      onLayout={scrollDown}
    />
  );
};

export default MessengerChatContent;
