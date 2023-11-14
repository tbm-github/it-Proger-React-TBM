import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import Counter from "./modules/counter";

export default function App() {
  return <Counter />;
}
