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
import React, { useContext } from "react";
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import StoryHighlight from "../components/StoryHighlight";
import { ThemeContext } from "../styles/theme";
import { PostsContext } from "../context/PostsContext";
import PostCard from "../components/PostCard";

const windowWidth = Dimensions.get("window").width;

export default function ProfileScreen() {
  const { theme } = useContext(ThemeContext);
  const { posts } = useContext(PostsContext);

  // For demo, all posts are from the user
  const userPosts = posts;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }} // placeholder profile pic
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={[styles.username, { color: theme.text }]}>@moonuser</Text>
          <Text style={[styles.bio, { color: theme.text }]}>
            Sharing thoughts under the moon 🌙
          </Text>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={[styles.statNumber, { color: theme.text }]}>{userPosts.length}</Text>
              <Text style={{ color: theme.text }}>Posts</Text>
            </View>
            <View style={styles.stat}>
              <Text style={[styles.statNumber, { color: theme.text }]}>120</Text>
              <Text style={{ color: theme.text }}>Followers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={[styles.statNumber, { color: theme.text }]}>200</Text>
              <Text style={{ color: theme.text }}>Following</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Story Highlights */}
      <View style={styles.highlightsContainer}>
        <StoryHighlight />
      </View>

      {/* Grid of Posts */}
      <FlatList
        data={userPosts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.postGrid}>
            <PostCard post={item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { flexDirection: "row", marginBottom: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  userInfo: { flex: 1, marginLeft: 15 },
  username: { fontSize: 20, fontWeight: "bold" },
  bio: { marginVertical: 5 },
  stats: { flexDirection: "row", marginTop: 10, justifyContent: "space-between", width: "80%" },
  stat: { alignItems: "center" },
  statNumber: { fontWeight: "bold", fontSize: 16 },
  highlightsContainer: { height: 100, marginBottom: 20 },
  postGrid: { flex: 1, margin: 5 },
});
