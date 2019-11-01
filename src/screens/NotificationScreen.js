import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class NotificationScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Text> Notification Screen</Text>
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

export default NotificationScreen;
