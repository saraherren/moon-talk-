import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator';

export default function App() {
    retturn (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
}
