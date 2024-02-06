import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { TodoType } from "../../types/todo";

type Props = {
  todo: TodoType;
  onCheckbox: (todo: TodoType) => void;
  onRemove: (todo: TodoType) => void;
};
export const Todo = (props: Props) => {
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
      textDecorationLine: props.todo.deleted ? "line-through" : "none",
    },
  });

  const onValueChange = () => {
    const todo = {
      ...props.todo,
      status: isChecked ? "notCompleted" : "completed",
    };
    props.onCheckbox(todo);
  };

  const isChecked = props.todo.status === "completed";
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={onValueChange}
      />
      <Text style={styles.text}>{props.todo.title}</Text>
      <Button
        title={props.todo.deleted ? "R" : "X"}
        onPress={() => {
          const todo = { ...props.todo, deleted: !props.todo.deleted };
          props.onRemove(todo);
        }}
      />
    </View>
  );
};
