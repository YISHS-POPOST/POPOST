import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import ProfileEditHeader from "../components/profile/edit/ProfileEditHeader";
import theme from "../theme";
import ProfileEditImageScreen from "./profileEdit/ProfileEditImageScreen";
import ProfileEditEmailScreen from "./profileEdit/ProfileEditIEmailScreen";
import ProfileEditPhoneScreen from "./profileEdit/ProfileEditPhoneScreen";
import ProfileEditNameScreen from "./profileEdit/ProfileEditINameScreen";
import ProfileEditNicknameScreen from "./profileEdit/ProfileEditINicknameScreen";
import ProfileEditIntroduceScreen from "./profileEdit/ProfileEditIntroduceScreen";
import ProfileEditSuccessScreen from "./profileEdit/ProfileEditSuccessScreen";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface } from "../src/type/state";
import { Profile } from "../src/type/profile";
import { setProfile } from "../src/actions/profileAction";
import { AppDispatch } from "../src/stores";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

const ProfileEditScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: StateInterface) => state.users);

  useEffect(() => {
    if (users) {
      const setProfileItem: Profile = {
        image: users.profile,
        name: users.name,
        phone: users.phone,
        email: users.email,
        nickname: users.nickname,
        introduce: users.introduce,
      };
      dispatch(setProfile(setProfileItem));
    }
  }, []);

  const options: NativeStackNavigationOptions = {
    headerBackVisible: false,
    headerTitleStyle: {
      ...theme.fontWeightBold,
      color: "#333",
    },
    headerShadowVisible: false,
    headerStyle: { backgroundColor: "#fff" },
    contentStyle: {
      backgroundColor: "#fff",
      ...theme.container,
    },
  };

  // 카메라 , 사진 고르기 액션 필요

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileEditImage"
        component={ProfileEditImageScreen}
        options={{
          ...options,
          headerTitle: "프로필 이미지 변경",
          headerLeft: () => ProfileEditHeader(),
        }}
      />
      <Stack.Screen
        name="ProfileEditName"
        component={ProfileEditNameScreen}
        options={{
          ...options,
          headerTitle: "이름 변경",
          headerLeft: () => ProfileEditHeader("ProfileEditImage"),
        }}
      />
      <Stack.Screen
        name="ProfileEditPhone"
        component={ProfileEditPhoneScreen}
        options={{
          ...options,
          headerTitle: "전화번호 변경",
          headerLeft: () => ProfileEditHeader("ProfileEditName"),
        }}
      />
      <Stack.Screen
        name="ProfileEditEmail"
        component={ProfileEditEmailScreen}
        options={{
          ...options,
          headerTitle: "이메일주소 변경",
          headerLeft: () => ProfileEditHeader("ProfileEditPhone"),
        }}
      />
      <Stack.Screen
        name="ProfileEditNickname"
        component={ProfileEditNicknameScreen}
        options={{
          ...options,
          headerTitle: "별명(닉네임) 변경",
          headerLeft: () => ProfileEditHeader("ProfileEditEmail"),
        }}
      />
      <Stack.Screen
        name="ProfileEditIntroduce"
        component={ProfileEditIntroduceScreen}
        options={{
          ...options,
          headerTitle: "소개 변경",
          headerLeft: () => ProfileEditHeader("ProfileEditNickname"),
        }}
      />
      <Stack.Screen
        name="ProfileEditSuccess"
        component={ProfileEditSuccessScreen}
        options={{
          ...options,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileEditScreen;
