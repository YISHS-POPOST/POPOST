import { View } from "react-native";
import theme from "../../theme";
import ProfileInfoItem from "./ProfileInfoItem";

const ProfileItems = () => {
  return (
    <View style={[theme.mainContainer, theme.mt3]}>
      <ProfileInfoItem
        icon={{ name: "users", color: theme.colors.blue }}
        title="팔로워"
        total={1000}
        unit="명"
      />
      <ProfileInfoItem
        icon={{ name: "user-check", color: theme.colors.purple }}
        title="팔로잉"
        total={80}
        unit="명"
      />
      <ProfileInfoItem
        icon={{ name: "edit", color: theme.colors.red }}
        title="커뮤니티 피드"
        total={2}
        unit="개"
      />
    </View>
  );
};

export default ProfileItems;
