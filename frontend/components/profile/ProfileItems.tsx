import { View } from "react-native";
import theme from "../../theme";
import ProfileInfoItem from "./ProfileInfoItem";
import { ProfileItemPayload } from "../../types/User";

type prop = {
  profileItem: ProfileItemPayload | undefined;
};

const ProfileItems = ({ profileItem }: prop) => {
  return !profileItem ? (
    <View></View>
  ) : (
    <View style={[theme.mainContainer, theme.mt3]}>
       <ProfileInfoItem
         icon={{ name: "users", color: theme.colors.blue }}
         title="팔로워"
         total={profileItem.followerCnt}
         unit="명"
       />
       <ProfileInfoItem
         icon={{ name: "user-check", color: theme.colors.purple }}
         title="팔로잉"
         total={profileItem.followingCnt}
         unit="명"
       />
       <ProfileInfoItem
         icon={{ name: "edit", color: theme.colors.red }}
         title="커뮤니티 피드"
         total={profileItem.communityCnt}
         unit="개"
       />
    </View>
  );
};

export default ProfileItems;
