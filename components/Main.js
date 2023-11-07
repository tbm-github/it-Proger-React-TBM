import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { gStyle } from "../styles/style";

export default function Main() {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}> Главная страница </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
