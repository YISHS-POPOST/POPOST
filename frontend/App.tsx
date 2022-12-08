import StartScreen from "./screens/StartScreen";
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        
        
        <Stack.Screen name="start" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;