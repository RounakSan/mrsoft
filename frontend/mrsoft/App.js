import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListedDoctors from "./Components/ListedDoctors";
import Home from "./Components/Home";
import expandableCalendarScreen from "./Components/react-native-calendars-master/react-native-calendars-master/example/src/screens/expandableCalendarScreen.tsx";
import Footer from "./Components/Footer";
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
        <Stack.Screen name="expandableCalendarScreen" component={expandableCalendarScreen}/>
      </Stack.Navigator>
      {/* <Footer /> */}
    </NavigationContainer>
  );
}
