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
    paddingTop: 30,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: "#000",
    width: "80%",
    marginLeft: "10%",
  },
  text: {
    fontSize: 18,
    color: "black",
    textAlign: "left",
    verticalAlign: "bottom",
  },
});
