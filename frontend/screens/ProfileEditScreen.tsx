import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileEditHeader from "../components/profile/edit/ProfileEditHeader";
import theme from "../theme";
import ProfileEditImageScreen from "./ProfileEditImageScreen";

const Stack = createNativeStackNavigator();

const ProfileEditScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileEditImage"
        component={ProfileEditImageScreen}
        options={() => ({
          headerTitle: "이미지교체",
          headerBackVisible: false,
          headerLeft: () => ProfileEditHeader(),
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
        })}
      />
    </Stack.Navigator>
  );
};

export default ProfileEditScreen;
