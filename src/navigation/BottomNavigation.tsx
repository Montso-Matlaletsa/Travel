import React from "react";
import Favorites from "../screens/Favorites";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabs } from "../@types/types";

const Tab = createBottomTabNavigator<BottomTabs>();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { borderRadius: 20 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "md-heart-sharp" : "md-heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          //@ts-ignore
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name={"Home"} component={Home} />
      <Tab.Screen
        name={"Favorites"}
        component={Favorites}
        options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen name={"Profile"} component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTab;
