import { useState } from "react";
import { Text, View } from "react-native";
import { Todo } from "./Todo";
import { Header } from "./Header";

const TaskManager = () => {
  const [todos, setTodos] = useState([
    { title: "Task 1", status: "completed", id: "0" },
    { title: "Task 2", status: "notCompleted", id: "1" },
    { title: "Task 3", status: "delete", id: "2" },
  ]);

  const onAdd = () => {};

  const onRemove = (id) => {
    console.log("remove");
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <View>
      <Header />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </View>
  );
};
export default TaskManager;
