import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import HomeScreen from "../screens/HomeScreen";
//import Artist from "../screens/Artist";
//import PlayList from "../screens/PlayList";

export default function NavigationDrawer() {
  const Drawer = createDrawerNavigator();

  return <Drawer.Navigator></Drawer.Navigator>;
}

/*<Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Music App",
          headerStyle: {
            backgroundColor: pastelPalette.backgroundSplash,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen name="Artist" component={Artist} />
      <Drawer.Screen name="PlayList" component={PlayList} /> */
