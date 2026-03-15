import React from "react";
import { FlatList, View } from "react-native";
import PostCard from "../components/PostCard";

const posts = [
  { id: "1", text: "First MoonTalk post 🌙" },
  { id: "2", text: "Another thought..." },
  { id: "3", text: "Blog style idea 💭" },
];

export default function FeedScreen() {  // <- updated name
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostCard post={item} />}
      keyExtractor={(item) => item.id}
      pagingEnabled
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  storiesContainer: {
    height: 100,  // Adjust height to fit your StoryHighlight component
    paddingVertical: 10,
  },
});
