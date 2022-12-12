import StartScreen from "./screens/StartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import CommunityScreen from "./screens/CommunityScreen";
import MessengerScreen from "./screens/MessengerScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "./theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeHeader from "./components/home/HomeHeader";

const Tap = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="start" component={StartScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "로그인",
          ...theme.headerOptions,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: "회원가입",
          ...theme.headerOptions,
        }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <Tap.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tap.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "ios-home" : "ios-home-outline"}
              color={color}
              size={size}
            />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor : 'rgba(0,0,0,0)',
            borderBottomColor: "rgba(0,0,0,.5)",
            borderBottomWidth: .2,
          },
          headerTitle: HomeHeader,
        }}
      />
      <Tap.Screen
        name="map"
        component={MapScreen}
        options={{
          title: "지도",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "ios-map" : "ios-map-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tap.Screen
        name="community"
        component={CommunityScreen}
        options={{
          title: "커뮤니티",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tap.Screen
        name="messenger"
        component={MessengerScreen}
        options={{
          title: "메신저",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "message-badge" : "message-badge-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tap.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: "프로필",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "face-man" : "face-man-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tap.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        <Tap.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Tap.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
