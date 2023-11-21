import { useState } from "react";
import { Text, View } from "react-native";
import { Todo } from "./Todo";

const TaskManager = () => {
  const [todos, setTodos] = useState([
    { title: "one", status: "completed", id: "0" },
    { title: "two", status: "notCompleted", id: "1" },
    { title: "three", status: "delete", id: "2" },
  ]);

  const onAdd = () => {};

  const onRemove = (id) => {
    console.log("remove");
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <View>
      <Text> TaskManager</Text>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </View>
  );
};
export default TaskManager;
