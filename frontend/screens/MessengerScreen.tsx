import { SafeAreaView, StyleSheet } from "react-native";
import MessengerList from "../components/messenger/MessengerList";
import { ProfileScreenNavigationProp } from "../types/NavigateType";

// 메신저 앱 들어가자 마자 전체 소켓 채널로 이동(현재활동중 때문) => 나중에 구현
// 내가 팔로우 한 사람 혹은 메시지가 있는 사람을 찾아 메신저 리스트 띄우기 (탭 만들기)
// 메신저 룸 만들기

const MessengerScreen = ({ navigation }: ProfileScreenNavigationProp) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <MessengerList navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex  : 1,
  },
});

export default MessengerScreen;