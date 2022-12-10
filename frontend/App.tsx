import StartScreen from "./screens/StartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import SplashScreen from "./screens/SplashScreen";
import MainScreen from "./screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from "./theme";

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
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
