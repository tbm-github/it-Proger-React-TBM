import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { gStyle } from "../styles/style";

export default function Contacts({ route }) {
  //   const loadScene = () => {
  //     navigation.goBack();
  //   };
  return (
    <View style={gStyle.main}>
      <Image
        style={styles.image}
        source={{
          uri: route.params.img,
        }}
      />
      <Text style={[gStyle.title, styles.header]}> {route.params.name}</Text>
      <Text style={styles.full}> {route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  full: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  header: {
    fontSize: 25,
    marginTop: 25,
  },
});
