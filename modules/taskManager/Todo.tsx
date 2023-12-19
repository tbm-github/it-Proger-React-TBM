import { Button, StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";

type Props = {
  todo: {
    title: string;
    status: string;
    deleted: boolean;
    id: string;
  };
  onCheckbox: (id: string, isChecked: boolean) => void;
  onRemove: (id: string) => void;
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

  const isChecked = props.todo.status === "completed";
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={() => props.onCheckbox(props.todo.id, isChecked)}
      />
      <Text style={styles.text}>{props.todo.title}</Text>
      <Button
        title={props.todo.deleted ? "R" : "X"}
        onPress={() => props.onRemove(props.todo.id)}
      />
    </View>
  );
};
