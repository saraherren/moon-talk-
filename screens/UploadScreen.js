import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { ThemeContext } from "../styles/theme";
import { PostsContext } from "../context/PostsContext";

export default function UploadScreen() {
  const { theme } = useContext(ThemeContext);
  const { addPost } = useContext(PostsContext);
  const [postText, setPostText] = useState("");

  const handleSubmit = () => {
    if (!postText.trim()) {
      Alert.alert("Error", "Please enter some text before posting!");
      return;
    }

    addPost(postText);  // Add to shared posts
    setPostText("");    // Clear input
    Alert.alert("Success", "Your post has been created!");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TextInput
        style={[styles.input, { color: theme.text, borderColor: theme.border }]}
        placeholder="Write your post..."
        placeholderTextColor={theme.text + "99"}
        multiline
        value={postText}
        onChangeText={setPostText}
      />
      <Button title="Post" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { minHeight: 150, borderWidth: 1, borderRadius: 10, padding: 15, marginBottom: 20, fontSize: 18 },
});
