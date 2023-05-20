import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListedDoctors from "./Components/ListedDoctors";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import MySchedule from "./Components/MySchedule";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListedDoctors" component={ListedDoctors} />
        <Stack.Screen name="MySchedule" component={MySchedule}/>
        {/* <Stack.Screen
          name="Footer"
          component={Footer}
          options={{
            headerTitle: "Screen 2 Title",
            headerRight: () => <Footer />,
          }}
        /> */}
      </Stack.Navigator>
      {/* <Footer /> */}
    </NavigationContainer>
  );
}
