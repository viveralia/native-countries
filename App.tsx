import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import globalFetcher from "./src/utils/global-fetcher";
import HomeScreen from "./src/screens/home.screen";
import DetailScreen from "./src/screens/detail.screen";
import { SWRConfig } from "swr";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SWRConfig value={{ fetcher: globalFetcher }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "All Countries" }}
          />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SWRConfig>
  );
};
export default App;
