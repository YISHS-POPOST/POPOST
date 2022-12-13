import { View, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import theme from "../../theme";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";

const MessengerChatHeader = (navigation: ProfileScreenNavigationProp) => {
  return (
    <View
      style={[
        theme.justifyContentBetween,
        theme.alignItemsCenter,
        theme.flexDirectionRow,
        styles.container,
      ]}
    >
      <Entypo
        name="chevron-left"
        onPress={() => navigation.pop()}
        size={30}
        color={theme.colors.purple}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MessengerChatHeader;
