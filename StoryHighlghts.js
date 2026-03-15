import React from "react";
import { ScrollView } from "react-native";
import HighlightBubble from "./HighlightBubble";

const highlights = [
  { id: 1, title: "Travel" },
  { id: 2, title: "Thoughts" },
  { id: 3, title: "Music" },
];

export default function StoryHighlight() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {highlights.map((item) => (
        <HighlightBubble key={item.id} title={item.title} />
      ))}
    </ScrollView>
  );
}
