import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

class PostScreen extends Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="md-arrow-back" size={24} color="#D8D9DB" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontWeight: "500" }}>Post</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/tempAvatar.jpg")}
            style={styles.avatar}
          />
          <TextInput
            autoFocus={true}
            multiline={true}
            numberOfLines={4}
            style={{ flex: 1 }}
            placeholder="Care to share?"
          />
        </View>

        <TouchableOpacity style={styles.photo}>
          <Ionicons name="md-camera" size={32} color="#D8D9DB" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D8D9DB"
  },
  inputContainer: {
    margin: 32,
    flexDirection: "row"
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 36
  },
  photo: {
    alignItems: "flex-end",
    marginHorizontal: 32
  }
});

export default PostScreen;
