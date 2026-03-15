import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import StoryHighlight from "../components/StoryHighlight";
import PostCard from "../components/PostCard";

const posts = [
  { id: "1", text: "Hello from the moon! 🌙" },
  { id: "2", text: "Enjoying night mode" },
  { id: "3", text: "React Native is awesome!" },
];

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.storiesContainer}>
        <StoryHighlight />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  storiesContainer: {
    height: 100,  // Adjust height to fit your StoryHighlight component
    paddingVertical: 10,
  },
});
