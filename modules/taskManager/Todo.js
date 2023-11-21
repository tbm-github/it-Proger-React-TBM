import { Button, Text, View } from "react-native";

export const Todo = (props) => {
  return (
    <View>
      <Text>{props.todo.title}</Text>
      <Button title="X" onPress={() => props.onRemove(props.todo.id)} />
    </View>
  );
};
