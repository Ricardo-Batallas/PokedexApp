import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import HomeScreen from "../screens/HomeScreen";
//import Artist from "../screens/Artist";
//import PlayList from "../screens/PlayList";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return <Stack.Navigator></Stack.Navigator>;
}
/*
initialRouteName="Home" 
<Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Artist" component={Artist} />
      <Stack.Screen name="PlayList" component={PlayList} /> */
