import { FlatList, View } from "react-native";
import MessengerListItem from "./MessengerListItem";
import { ItemInterface } from "../../types/MessengerType";
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
import MessengerListLoading from "../loading/MessengerListLoading";
import MessengerListEmpty from "./MessengerListEmpty";

export interface Message {
  id: number;
  created_at: Date;
  user_id: string;
  content: string;
  room_id: number;
  check: boolean;
}

type renderItemType = { item: ItemInterface | null | undefined };
type tabType = "message" | "following";

interface listType {
  id: number;
  follow_id: string;
  follower_id: string;
  user?: ListUserInterface;
  createUser?: ListUserInterface;
  inviteUser?: ListUserInterface;
  message?: Message;
}

const MessengerList = ({ navigation }: ProfileScreenNavigationProp) => {
  const [list, setList] = useState<listType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
      setIsLoading(true);
    });
  };

  useEffect(() => {
    loadList();
  }, [tab]);

  const info = list.map(item => {
    if (item.user) {
      return {
        image: item.user.profile,
        state: false,
        name: item.user.name,
        check: null,
        time: new Date(2022, 0, 12),
        content: "",
        userId: item.user.id,
      };
    } else if (item.createUser) {
      return {
        image: item.createUser.profile,
        state: false,
        name: item.createUser.name,
        check: !item.message ? false : item.message.check,
        time: !item.message ? null : new Date(item.message.created_at),
        content: !item.message
          ? "메시지를 시작해주세요!"
          : item.message.content,
        userId: item.createUser.id,
      };
    } else if (item.inviteUser) {
      return {
        image: item.inviteUser.profile,
        state: false,
        name: item.inviteUser.name,
        check: !item.message ? false : item.message.check,
        time: !item.message ? null : new Date(item.message.created_at),
        content: !item.message
          ? "메시지를 시작해주세요!"
          : item.message.content,
        userId: item.inviteUser.id,
      };
    }
  });

  const renderItem = ({ item }: renderItemType) => {
    if (!item) return <View></View>;
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

  return !isLoading ? (
    <View style={[theme.mainContainer]}>
      <MessengerHeader />
      <MessengerListLoading />
    </View>
  ) : !list ? (
    <View style={[theme.mainContainer]}>
      <MessengerHeader />
      <MessengerListLoading />
    </View>
  ) : list.length === 0 ? (
    <View style={[theme.mainContainer]}>
      <MessengerHeader />
      <MessengerTab setTab={setTab} tab={tab} />
      <MessengerListEmpty />
    </View>
  ) : (
    <FlatList
      data={info}
      renderItem={renderItem}
      ListHeaderComponent={() => {
        return (
          <View style={[theme.mainContainer]}>
            <MessengerHeader />
            <MessengerTab setTab={setTab} tab={tab} />
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MessengerList;
