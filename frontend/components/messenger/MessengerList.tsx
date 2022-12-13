import { FlatList, View } from "react-native";
import MessengerListItem from "./MessengerListItem";
import { ItemInterface } from "../../types/MessengerType";

type renderItemType = { item: ItemInterface };

const MessengerList = () => {
  const date = new Date();

  const info: ItemInterface[] = [
    {
      image: require("../../assets/image/profile/3d_profile1.jpg"),
      state: true,
      name: "최우창",
      check: false,
      time: date,
      content:
        "will already know about the date type definition as Date is an internal TypeScript object referenced by the DateConstructor interface.",
    },
    {
      image: require("../../assets/image/profile/3d_profile2.jpg"),
      state: true,
      name: "AI 이세계 팬티녀",
      check: true,
      time: date,
      content:
        "will already know about the date type definition as Date is an internal TypeScript object referenced by the DateConstructor interface.",
    },
    {
      image: require("../../assets/image/profile/3d_profile3.jpg"),
      state: true,
      name: "이을용",
      check: false,
      time: date,
      content: "앙 기무띠 을용타!",
    },
    {
      image: require("../../assets/image/profile/3d_profile3.jpg"),
      state: true,
      name: "이을용",
      check: false,
      time: date,
      content: "앙 기무띠 을용타!",
    },
    {
      image: require("../../assets/image/profile/3d_profile3.jpg"),
      state: true,
      name: "이을용",
      check: false,
      time: date,
      content: "앙 기무띠 을용타!",
    },
    {
      image: require("../../assets/image/profile/3d_profile3.jpg"),
      state: true,
      name: "이을용",
      check: false,
      time: date,
      content: "앙 기무띠 을용타!",
    },
    {
      image: require("../../assets/image/profile/3d_profile3.jpg"),
      state: true,
      name: "이을용",
      check: false,
      time: date,
      content: "앙 기무띠 을용타!",
    },
    {
      image: require("../../assets/image/profile/3d_profile3.jpg"),
      state: true,
      name: "이을용",
      check: false,
      time: date,
      content: "앙 기무띠 을용타!",
    },
    {
      image: require("../../assets/image/profile/3d_profile3.jpg"),
      state: true,
      name: "이을용",
      check: false,
      time: date,
      content: "앙 기무띠 을용타!",
    },
    {
      image: require("../../assets/image/profile/3d_profile3.jpg"),
      state: true,
      name: "이을용",
      check: false,
      time: date,
      content: "앙 기무띠 을용타!",
    },
    {
      image: require("../../assets/image/profile/3d_profile3.jpg"),
      state: true,
      name: "이을용",
      check: false,
      time: date,
      content: "앙 기무띠 을용타!",
    },
    {
      image: require("../../assets/image/profile/3d_profile3.jpg"),
      state: true,
      name: "이을용",
      check: false,
      time: date,
      content: "앙 기무띠 을용타!",
    },
  ];

  const renderItem = ({ item }: renderItemType) => {
    return (
      <MessengerListItem
        image={item.image}
        state={item.state}
        name={item.name}
        check={item.check}
        time={item.time}
        content={item.content}
      />
    );
  };

  return (
    <View>
      <FlatList data={info} renderItem={renderItem} />
    </View>
  );
};

export default MessengerList;
