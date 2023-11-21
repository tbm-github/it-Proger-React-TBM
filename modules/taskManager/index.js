import { useState } from "react";
import { Text, View } from "react-native";
import { Todo } from "./Todo";

const TaskManager = () => {
  const [todos, setTodos] = useState(["one", "two", "three"]);

  const onAdd = () => {};

  const onRemove = () => {};

  return (
    <View>
      <Text> TaskManager</Text>
      {todos.map((todo) => (
        <Todo text={todo} />
      ))}
    </View>
  );
};
export default TaskManager;
