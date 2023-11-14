import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createSlice, configureStore } from "@reduxjs/toolkit";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button title={"-"} onPress={() => setCount(count - 1)} />
      </View>

      <View style={[styles.box, { backgroundColor: "white" }]}>
        <Text numberOfLines={1} style={styles.text}>
          {count}
        </Text>
      </View>

      <View style={styles.box}>
        <Button title={"+"} onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  box: {
    backgroundColor: "yellow",
    width: "30%",
    height: 60,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    justifyContent: "center",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
});
