import { View, Text } from "react-native";
import React from "react";
import { createNavigationContainerRef } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ListProfile from "./homeScreens/ListProfile";
import MyProfile from "./homeScreens/MyProfile";
import Groupe from "./homeScreens/Groupe";

const tab = createMaterialBottomTabNavigator();
export default function Home() {
  return (
    <tab.Navigator>
      <tab.Screen name="ListProfile" component={ListProfile}></tab.Screen>
      <tab.Screen name="Groupe" component={Groupe}></tab.Screen>
      <tab.Screen name="MyProfile" component={MyProfile}></tab.Screen>
    </tab.Navigator>
  );
}
