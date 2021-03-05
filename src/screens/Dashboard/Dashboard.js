import React from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { firebase } from "../../firebase/config";

const Dashboard = ({ navigation }) => {
  const onLogoutPress = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <View>
      <Button title="Logout" onPress={() => onLogoutPress()} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
