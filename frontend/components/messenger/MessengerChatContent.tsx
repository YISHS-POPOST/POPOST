import { useRef } from "react";
import { FlatList } from "react-native";
import theme from "../../theme";
import MessengerChatOther from "./MessengerChatOther";
import { ChatPropsType } from "../../types/MessengerType";
import MessengerChatMine from "./MessengerChatMine";

interface ChatContent {
  time: Date;
  content: string[];
  mine: boolean;
}

type renderItemType = { item: ChatContent };

const MessengerChatContent = ({ image, name }: ChatPropsType) => {
  const flatListRef = useRef<FlatList>(null);

  const data: ChatContent[] = [
    {
      time: new Date(),
      content: [
        "화면을 구성할 때 함께 전달되는 매개변수(parameters)를 말한다.",
        "params를 사용하기 위해서는 두 가지 과정이 있어야 한다. 1. navigation.navigate() 함수의 두 번째 변수로 params를 전달해야 한다.",
      ],
      mine: false,
    },
    {
      time: new Date(),
      content: [
        "params 는 JSON직렬화가 가능한 형태를 추천한다.",
        "(보통 객체 형태로 전달한다)",
      ],
      mine: true,
    },
    {
      time: new Date(),
      content: [
        "params의 기초값을 설정해 매개변수를 따로 지정하지 않은 경우 사용하도록 한다.",
        "Screen에서 설정한다.",
      ],
      mine: false,
    },
    {
      time: new Date(2022, 10, 1),
      content: [
        "params의 기초값을 설정해 매개변수를 따로 지정하지 않은 경우 사용하도록 한다.",
        "Screen에서 설정한다.",
      ],
      mine: true,
    },
  ];

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
