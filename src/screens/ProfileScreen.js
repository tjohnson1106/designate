import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ProfileScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Text> Profile Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ProfileScreen;
