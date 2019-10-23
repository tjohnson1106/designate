import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoadingScreen from "./src/screens/LoadingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";

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

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);
