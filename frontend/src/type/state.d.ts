// 각 state를 모아두고 useSelector를 쓸때 state 타입을 checking
import { CommunityType } from "./commuity";
import { ProfileScreenNavigationProp } from "../../types/NavigateType";
import { Users } from "./users";
import { Profile } from "./profile";
import { SocketType } from "./socket";

export interface StateInterface {
  users: Users;
  community: CommunityType;
  navigation: ProfileScreenNavigationProp | null;
  profile: Profile;
  socket: SocketType;
}
