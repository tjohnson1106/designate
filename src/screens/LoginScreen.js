import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>{`Hello. \nWelcome.`}</Text>

        <View style={styles.errorMessage}>
          <Text style={styles.greeting}>Error</Text>
        </View>

        <View style={styles.form}>
          {/* email */}
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput style={styles.input} autoCapitalize="none"></TextInput>
          </View>
          {/* password */}
          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#FFF", fontWeight: 500 }}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ color: "#414959", fontSize: 13 }}>
            New to Designate{" "}
            <Text style={{ color: "#E9446A", fontWeight: "500" }}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: "#8A89FE",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A89FE",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center"
  }
});

export default LoginScreen;
