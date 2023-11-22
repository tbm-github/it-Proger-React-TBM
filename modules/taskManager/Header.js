import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>ToDo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    paddingLeft: 10,
    height: 100,
  },
  text: {
    fontSize: 18,
    color: "black",
    textAlign: "left",

    borderBottomWidth: 1,
    borderColor: "#000",
  },
});
