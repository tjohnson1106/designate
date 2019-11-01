import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class MessageScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Text>Message Screen</Text>
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

export default MessageScreen;
