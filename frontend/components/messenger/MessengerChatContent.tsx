import { useEffect, useRef } from "react";
import { FlatList } from "react-native";
import theme from "../../theme";
import MessengerChatOther from "./MessengerChatOther";
import { ChatPropsType } from "../../types/MessengerType";
import MessengerChatMine from "./MessengerChatMine";
import { useState } from "react";
import { useSelector } from "react-redux";
import { StateInterface } from "../../src/type/state";

interface ChatContent {
  time: Date;
  content: string;
  mine: boolean;
}

type renderItemType = { item: ChatContent };

const MessengerChatContent = ({ image, name }: ChatPropsType) => {
  const flatListRef = useRef<FlatList>(null);
  const [data, setData] = useState<ChatContent[]>([]);
  const socket = useSelector((state: StateInterface) => state.socket);
  const users = useSelector((state: StateInterface) => state.users);

  useEffect(() => {
    socket.on("get message", (messageData: any) => {
      const contentPayload: ChatContent = {
        time: new Date(),
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
    return mine ? (
      <MessengerChatMine time={time} content={content} />
    ) : (
      <MessengerChatOther
        name={name}
        image={image}
        time={time}
        content={content}
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
