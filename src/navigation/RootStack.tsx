import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackProps, StackNavigation } from "../@types/types";
import BottomTab from "./BottomNavigation";
import ViewPlace from "../screens/ViewPlace";

const Stack = createNativeStackNavigator<RootStackProps>();
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      {/* @ts-ignore */}
      <Stack.Screen name={StackNavigation.BOTTOM_TABS} component={BottomTab} />
      {/* @ts-ignore */}
      <Stack.Screen name={StackNavigation.VIEW_PLACE} component={ViewPlace} />
    </Stack.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
