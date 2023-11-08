import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { gStyle } from "../styles/style";

export default function Contacts({ route }) {
  //   const loadScene = () => {
  //     navigation.goBack();
  //   };
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}> {route.params.name}</Text>
      <Text> {route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
