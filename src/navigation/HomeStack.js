import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "../screens/HomeScreen/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

const HomeStackNavigator = (props) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Dashboard" component={Dashboard} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
