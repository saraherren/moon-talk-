import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HighlightBubble({ title }) {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 15,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 5,
  },
});
