import { StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import theme from "../../theme";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";

const MessengerChatHeaderRight = (
  navigation: ProfileScreenNavigationProp,
  route: any
) => {
  return <MaterialIcons name="post-add" color={theme.colors.purple} size={30} />;
};

const styles = StyleSheet.create({
}); 

export default MessengerChatHeaderRight;
