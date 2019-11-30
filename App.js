import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
// import * as firebase from "firebase";

import LoadingScreen from "./src/screens/LoadingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MessageScreen from "./src/screens/MessageScreen";
import PostScreen from "./src/screens/PostScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

// export var firebaseConfig = {
//   apiKey: "AIzaSyCnan8KTDmIIlDLtjSmqsGX1oc8HT2N8hI",
//   authDomain: "designate-f8dcd.firebaseapp.com",
//   databaseURL: "https://designate-f8dcd.firebaseio.com",
//   projectId: "designate-f8dcd",
//   storageBucket: "designate-f8dcd.appspot.com",
//   messagingSenderId: "687988605359",
//   appId: "1:687988605359:web:22f804edfd5bbcef2baf5a"
// };

// Initialize Firebase

// firebase.initializeApp(firebaseConfig);

// removed10312019
// const AppStack = createStackNavigator({
//   Home: HomeScreen
// });

const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
      {
        Home: {
          screen: HomeScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-home" size={24} color={tintColor} />
            )
          }
        },
        Message: {
          screen: MessageScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
            )
          }
        },
        Post: {
          screen: PostScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons
                name="ios-add-circle"
                size={24}
                color={tintColor}
                style={{
                  shadowColor: "#E9446A",
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 10,
                  shadowOpacity: 0.3
                }}
              />
            )
          }
        },
        Notification: {
          screen: NotificationScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-add-circle" size={24} color={tintColor} />
            )
          }
        },
        Profile: {
          screen: ProfileScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-person" color={tintColor} />
            )
          }
        }
      },
      {
        defaultNavigationOptions: {
          tabBarOnPress: ({ navigation, defaultHandler }) => {
            if (navigation.state.key === "Post") {
              navigation.navigate("postModal");
            } else {
              defaultHandler();
            }
          }
        },
        tabBarOptions: {
          activeTintColor: "#161F3D",
          inActiveTintColor: "#B8BBC4",
          showLabel: false
        }
      }
    ),
    postModal: {
      screen: PostScreen
    }
  },

  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "postModal"
  }
);

// v const AppTabNavigator = ()

// const AppTabNavigator = createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) => (
//         <Ionicons name="ios-home" size={24} color={tintColor} />
//       )
//     }
//   },
//   Message: {
//     screen: MessageScreen,
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) => (
//         <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
//       )
//     }
//   },
//   Post: {
//     screen: PostScreen,
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) => (
//         <Ionicons
//           name="ios-add-circle"
//           size={24}
//           color={tintColor}
//           style={{
//             shadowColor: "#E9446A",
//             shadowOffset: { width: 0, height: 0 },
//             shadowRadius: 10,
//             shadowOpacity: 0.3
//           }}
//         />
//       )
//     }
//   },
//   Notification: {
//     screen: NotificationScreen,
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) => (
//         <Ionicons name="ios-add-circle" size={24} color={tintColor} />
//       )
//     }
//   }
// });

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppContainer,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);
