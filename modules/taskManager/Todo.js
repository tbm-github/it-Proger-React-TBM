import { Button, StyleSheet, Text, View } from "react-native";

export const Todo = (props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{props.todo.title}</Text>
      <Button title="X" onPress={() => props.onRemove(props.todo.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 20,
    borderWidth: 1,
    marginTop: 20,
    width: "80%",
    textAlign: "center",
    marginLeft: "10%",
  },
  text: {
    fontSize: 18,
    color: "black",
    textAlign: "left",
  },
});
