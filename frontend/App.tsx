import StartScreen from "./screens/StartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from "./theme";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="start" component={StartScreen} />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            title: "로그인",
            ...theme.headerOptions,
          }}
        />
        <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={{
            title: "회원가입",
            ...theme.headerOptions,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
