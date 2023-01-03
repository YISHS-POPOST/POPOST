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
  user?: ListUserInterface;
  createUser?: ListUserInterface;
  inviteUser?: ListUserInterface;
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
      image: item.user
        ? item.user.profile
        : item.createUser
        ? item.createUser.profile
        : item.inviteUser
        ? item.inviteUser.profile
        : null,
      state: false,
      name: item.user
        ? item.user.name
        : item.createUser
        ? item.createUser.name
        : item.inviteUser
        ? item.inviteUser.name
        : "",
      check: false,
      time: new Date(2022, 0, 12),
      content: "",
      userId: item.user
        ? item.user.id
        : item.createUser
        ? item.createUser.id
        : item.inviteUser
        ? item.inviteUser.id
        : null,
    };
  });

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
