import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from "firebase";

class LoadingScreen extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
  }
  render() {
    return (
      <View style={styles.root}>
        <Text>Loading ...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LoadingScreen;
