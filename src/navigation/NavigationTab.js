import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import PokedexScreen from "../screens/PokedexScreen";
import Icon from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          ...screenOptionStyle,
          tabBarActiveTintColor: "#2980b9",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [{ display: "flex" }],
        }}
      >
        <Tab.Screen
          name="Pokemon Favoritos"
          component={FavoriteScreen}
          options={{
            tabBarLabel: "Favoritos",
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="heart-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Todos los Pokemon"
          component={PokedexScreen}
          options={{
            tabBarIcon: () => renderPokeball(),
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="Mi Cuenta"
          component={AccountScreen}          
          options={{
            tabBarLabel: "Mi Cuenta",
            tabBarIcon: ({ color, size }) => (
              <Icon name="user-alt" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../../assets/images/pokeball.png")}
      style={{ width: 50, height: 50, top: -15 }}
    />
  );
}

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#2980b9",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

/*
<Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Artist" component={Artist} />
      <Tab.Screen name="PlayList" component={PlayList} />

      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="catching-pokemon"
              color={focused ? "red" : color}
              size={31}
            />
          ),
        }}
      />
*/
