import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;

export default function PostCard({ post }) {
  return (
    <View style={styles.post}>
      <Text style={styles.text}>{post.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
