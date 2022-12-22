import { FlatList, View } from "react-native";
import MessengerListItem from "./MessengerListItem";
import { ItemInterface } from "../../types/MessengerType";
import MessengerSearch from "./MessengerSearch";
import MessengerHeader from "./MessengerHeader";
import theme from "../../theme";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import MessengerTab from "./MessengerTab";
type renderItemType = { item: ItemInterface };

const MessengerList = ({ navigation }: ProfileScreenNavigationProp) => {
  const date = new Date();

  const info: ItemInterface[] = [
    {
      image: require("../../assets/image/profile/3d_profile1.jpg"),
      state: true,
      name: "최우창",
      check: false,
      time: new Date(2022, 0, 12),
      content:
        "will already know about the date type definition as Date is an internal TypeScript object referenced by the DateConstructor interface.",
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
        navigation={navigation}
      />
    );
  };

  return (
    <FlatList
      data={info}
      renderItem={renderItem}
      ListHeaderComponent={() => {
        return (
          <View style={[theme.mainContainer]}>
            <MessengerHeader />
            <MessengerSearch />
            <MessengerTab />
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MessengerList;
