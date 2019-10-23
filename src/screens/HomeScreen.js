import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Text>HomeScreen</Text>
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

export default HomeScreen;
