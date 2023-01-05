import { ScrollView, StyleSheet, View } from "react-native";
import MessengerChatBottom from "../components/messenger/MessengerChatBottom";
import MessengerChatContent from "../components/messenger/MessengerChatContent";
import theme from "../theme";
import MessengerChatStart from "../components/messenger/MessengerChatStart";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "@env";
import { useSelector } from "react-redux";
import { StateInterface } from "../src/type/state";

const MessengerChatScreen = ({ route }: any) => {
  const [room, setRoom] = useState<number | null>(null);
  const { image, name, userId } = route.params;
  const users = useSelector((state: StateInterface) => state.users);
  const socket = useSelector((state: StateInterface) => state.socket);

  const checkChatRoom = async () => {
    const postItem = [users.id, userId];
    await axios
      .post(API_URL + "/message-rooms/room", postItem)
      .then(async res => {
        const roomData = res.data.room;
        if (roomData) {
          setRoom(roomData.id);
        } else {
          setRoom(null);
        }
      });
  };

  const joinRoom = async () => {
    socket.emit("join", { room, userId: users.id });
  };

  useEffect(() => {
    checkChatRoom();
  }, []);

  useEffect(() => {
    if (room) {
      joinRoom();
    }
  }, [room]);

  return (
    <View style={[theme.flexDirectionColumn, styles.container]}>
      {!room ? (
        <MessengerChatStart userId={userId} checkChatRoom={checkChatRoom} />
      ) : (
        <>
          <MessengerChatContent image={image} name={name} room={room} />
          <MessengerChatBottom room={room} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MessengerChatScreen;
