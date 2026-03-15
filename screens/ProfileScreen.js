import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Highlights from "../components/HighlightBubble"; // Or StoryHighlight depending on layout
import PostCard from "../components/PostCard";
import { ThemeContext } from "../styles/theme";
import { PostsContext } from "../context/PostsContext";

export default function ProfileScreen() {
  const { theme } = useContext(ThemeContext);
  const { posts } = useContext(PostsContext); // get posts for this user

  // For now, show all posts — later you can filter by user
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.username, { color: theme.text }]}>@moonuser</Text>
      <Text style={[styles.bio, { color: theme.text }]}>
        Sharing thoughts under the moon 🌙
      </Text>

      {/* Story highlights section */}
      <View style={styles.highlightsContainer}>
        <Highlights /> 
      </View>

      {/* User posts */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bio: {
    marginVertical: 10,
  },
  highlightsContainer: {
    marginVertical: 20,
    height: 100, // adjust to fit Highlight bubbles
  },
});
