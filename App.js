import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { firebase } from "./src/firebase/config";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, HomeScreen, RegistrationScreen } from "./src/screens";
import { decode, encode } from "base-64";
import Dashboard from "./src/screens/Dashboard/Dashboard";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  const AllStack = createStackNavigator();

  const AllStackNavigator = () => {
    return (
      <AllStack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <AllStack.Screen name="Dashboard" component={Dashboard} />
        <AllStack.Screen name="Login" component={LoginScreen} />
        <AllStack.Screen name="Registration" component={RegistrationScreen} />
      </AllStack.Navigator>
    );
  };

  const HomeStack = createStackNavigator();

  const HomeStackNavigator = (props) => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Dashboard" component={Dashboard} />
      </HomeStack.Navigator>
    );
  };

  const AuthStack = createStackNavigator();

  const AuthStackNavigator = (props) => {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Registration" component={RegistrationScreen} />
      </AuthStack.Navigator>
    );
  };

  if (loading) {
    return <></>;
  }

  return (
    <NavigationContainer>
      {user ? <AllStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
