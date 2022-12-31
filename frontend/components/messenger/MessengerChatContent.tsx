import { useRef } from "react";
import { FlatList } from "react-native";
import theme from "../../theme";
import MessengerChatOther from "./MessengerChatOther";
import { ChatPropsType } from "../../types/MessengerType";
import MessengerChatMine from "./MessengerChatMine";
import { useState } from "react";

interface ChatContent {
  time: Date;
  content: string;
  mine: boolean;
}

type renderItemType = { item: ChatContent };

const MessengerChatContent = ({ image, name }: ChatPropsType) => {
  const flatListRef = useRef<FlatList>(null);
  const [data, setData] = useState<ChatContent[]>([]);
  
  // const data: ChatContent[] = [
  // {
  //   time: new Date(2022, 10, 1),
  //   content:
  //     "params의 기초값을 설정해 매개변수를 따로 지정하지 않은 경우 사용하도록 한다.",
  //   mine: true,
  // },
  // ];

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
      onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
    />
  );
};

export default MessengerChatContent;
