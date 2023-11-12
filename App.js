import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const handleButtonIncreasePress = (values) => {
    values++;
  };
  return (
    <View style={styles.container}>
      <Button title={"-"} />
      <Text numberOfLines={1} style={styles.text}>
        0
      </Text>
      <Button title={"+"} onPress={{ handleButtonIncreasePress }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
});
