import { Button, StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export const Todo = (props) => {
  const [isChecked, setChecked] = useState(false);
  let flag = "false";

  if (props.filter === "delete" && props.todo.delete === "true") flag = "true";
  else {
    if (props.filter === "all" && props.todo.delete === "false") flag = "true";
    else {
      if (props.filter === props.todo.status && props.todo.delete === "false")
        flag = "true";
    }
  }

  if (flag === "true") {
    return (
      <View style={styles.container}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={() => {
            props.onCheckbox(props.todo.id, isChecked);
            setChecked(!isChecked);
          }}
        />
        <Text style={styles.text}>{props.todo.title}</Text>
        <Button
          style={styles.text}
          title="X"
          onPress={() => props.onRemove(props.todo.id)}
        />
      </View>
    );
  }
};

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
  },
});
