import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../styles/theme";

export default function MoonToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Text style={{ fontSize: 24 }}>🌙</Text>
    </TouchableOpacity>
  );
}
