import { FlatList, View } from "react-native";
import MessengerListItem from "./MessengerListItem";
import { ItemInterface } from "../../types/MessengerType";
import MessengerSearch from "./MessengerSearch";
import MessengerHeader from "./MessengerHeader";
import theme from "../../theme";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import MessengerTab from "./MessengerTab";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@env";
import { useSelector } from "react-redux";
import { StateInterface } from "../../src/type/state";
import { ListUserInterface } from "../../types/MessengerType";

type renderItemType = { item: ItemInterface };
type tabType = "message" | "following";
interface listType {
  id: number;
  follow_id: string;
  follower_id: string;
  user: ListUserInterface;
}

const MessengerList = ({ navigation }: ProfileScreenNavigationProp) => {
  const [list, setList] = useState<listType[]>([]);
  const [tab, setTab] = useState<tabType>("message");
  const users = useSelector((state: StateInterface) => state.users);

  // first : list view
  // 유저 아이디 , 탭 타입
  const loadList = async () => {
    const postVal = {
      userId: users.id,
      tab,
    };
    await axios.post(API_URL + "/follows/follow/get", postVal).then(res => {
      setList(res.data.data);
    });
  };

  useEffect(() => {
    loadList();
  }, [tab]);

  const info = list.map(item => {
    return {
      image: item.user.profile,
      state: false,
      name: item.user.name,
      check: false,
      time: new Date(2022, 0, 12),
      content: "",
      userId: item.user.id,
    };
  });
  // const info: ItemInterface[] = [
  //   {
  //     image: require("../../assets/image/profile/3d_profile1.jpg"),
  //     state: true,
  //     name: "최우창",
  //     check: false,
  //     time: new Date(2022, 0, 12),
  //     content:
  //       "will already know about the date type definition as Date is an internal TypeScript object referenced by the DateConstructor interface.",
  //   },
  // ];

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
        userId={item.userId}
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
            <MessengerTab setTab={setTab} tab={tab} />
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MessengerList;
