import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./src/components/svgComponents/Logo";
import Clipboard from "./src/components/svgComponents/Clipboard";
import Home from "./src/screens/Home";
import { StatusBar } from "react-native";
export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      ></StatusBar>
      <Home />
    </>
  );
}
