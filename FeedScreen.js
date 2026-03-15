import React from "react";
import { View, FlatList } from "react-native";
import StoryHighlight from "../components/StoryHighlight";
import PostCard from "../components/PostCard";

const posts = [
  { id: "1", text: "Hello from the moon! 🌙" },
  { id: "2", text: "Enjoying night mode" },
  { id: "3", text: "React Native is awesome!" },
];

export default function FeedScreen() {
  return (
    <View style={{ flex: 1 }}>
      <StoryHighlight />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        pagingEnabled
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </View>
  );
}
