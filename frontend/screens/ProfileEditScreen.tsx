import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileEditImageScreen from "./ProfileEditImageScreen";

const Stack = createNativeStackNavigator();

const ProfileEditScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileEditImage"
        component={ProfileEditImageScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileEditScreen;
