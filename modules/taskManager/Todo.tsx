import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { TodoType } from "../../types/todo";

type Props = {
  todo: TodoType;
  onCheckbox: (todo: TodoType) => void;
  onRemove: (todo: TodoType) => void;
};

export const Todo = ({ todo, onCheckbox, onRemove }: Props) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 20,
      borderWidth: 1,
      width: "80%",
      marginLeft: "10%",
    },
    checkbox: {
      margin: 8,
    },
    text: {
      fontSize: 18,
      color: "black",
      textAlign: "left",
      textDecorationLine: todo.deleted ? "line-through" : "none",
    },
  });

  const onValueChange = () => {
    onCheckbox({
      ...todo,
      status: isChecked ? "notCompleted" : "completed",
    });
  };

  const onPress = () => {
    onRemove({ ...todo, deleted: !todo.deleted });
  };

  const isChecked = todo.status === "completed";
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={onValueChange}
      />
      <Text style={styles.text}>{todo.title}</Text>
      <Button title={todo.deleted ? "R" : "X"} onPress={onPress} />
    </View>
  );
};
