import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../components/ReduxTools";

export default function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button title={"-"} onPress={() => dispatch(decrement())} />
      </View>

      <View style={[styles.box, { backgroundColor: "white" }]}>
        <Text numberOfLines={1} style={styles.text}>
          {counter}
        </Text>
      </View>

      <View style={styles.box}>
        <Button title={"+"} onPress={() => dispatch(increment())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 80,
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
