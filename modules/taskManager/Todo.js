import { Button, StyleSheet, Text, View } from "react-native";

export const Todo = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.todo.title}</Text>
      <Button title="X" onPress={() => props.onRemove(props.todo.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    paddingLeft: 10,
    height: 100,
  },
  text: {
    fontSize: 18,
    color: "black",
    textAlign: "left",
  },
});
