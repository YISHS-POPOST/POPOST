import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: "latest" | "top" } | undefined;
};

// route prop type
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

// navigate prop type
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

// route + navigate type
type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};
