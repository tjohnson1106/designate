import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import LoadingScreen from "./src/screens/LoadingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MessageScreen from "./src/screens/MessageScreen";
import PostScreen from "./src/screens/PostScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCnan8KTDmIIlDLtjSmqsGX1oc8HT2N8hI",
  authDomain: "designate-f8dcd.firebaseapp.com",
  databaseURL: "https://designate-f8dcd.firebaseio.com",
  projectId: "designate-f8dcd",
  storageBucket: "designate-f8dcd.appspot.com",
  messagingSenderId: "687988605359",
  appId: "1:687988605359:web:22f804edfd5bbcef2baf5a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// removed10312019
// const AppStack = createStackNavigator({
//   Home: HomeScreen
// });

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: {
      HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={24} color={tintColor} />
        )
      }
      // continue with message screen
    }
  }
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);
