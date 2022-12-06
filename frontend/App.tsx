import { View, Text } from "react-native";
import StartScreen from "./screens/StartScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="start" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
