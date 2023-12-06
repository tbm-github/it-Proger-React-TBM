import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Filter } from "./Filter";
import { Todo } from "./Todo";
import { Header } from "./Header";
import { Form } from "./Form";
import { onAdd, onCheckbox, onRemove } from "../store/todoReducer";

const TaskManager = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log("todos : ", todos);
  // Data for Select
  const data = [
    { key: "all", value: "all" },
    { key: "completed", value: "completed" },
    { key: "notCompleted", value: "not-completed" },
    { key: "delete", value: "delete" },
  ];

  const [filter, setFilter] = useState("");

  const onSelect = (filter) => {
    setFilter(filter);
  };

  // const [todos, setTodos] = useState([
  //   { title: "Task 1", status: "notCompleted", deleted: false, id: "0" },
  //   { title: "Task 2", status: "notCompleted", deleted: false, id: "1" },
  //   { title: "Task 3", status: "notCompleted", deleted: false, id: "2" },
  // ]);

  // const onCheckbox = (id, isChecked) => {
  //   setTodos((list) =>
  //     list.map((el) => {
  //       return el.id === id
  //         ? { ...el, status: isChecked ? "notCompleted" : "completed" }
  //         : el;
  //     })
  //   );
  // };

  // const onRemove = (id) => {
  //   setTodos((todos) =>
  //     todos.map((el) => {
  //       return el.id === id ? { ...el, deleted: !el.deleted } : el;
  //     })
  //   );
  // };

  // const onAdd = (text) => {
  //   setTodos((list) => {
  //     return [
  //       ...list,
  //       {
  //         title: text,
  //         status: "notCompleted",
  //         deleted: false,
  //         id: Math.random().toString(36).substring(7),
  //       },
  //     ];
  //   });
  // };

  return (
    <View>
      <Header />

      <Filter data={data} onSelect={onSelect} />
      <ScrollView style={{ height: "60%" }}>
        {todos
          .filter(
            (todo) =>
              (filter === "delete" && todo.deleted) ||
              (!todo.deleted && (filter === "all" || filter === todo.status))
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onCheckbox={() => dispatch(onCheckbox(321))}
              // onCheckbox={onCheckbox}
              onRemove={() => dispatch(onRemove(todo.id))}
            />
          ))}
      </ScrollView>
      <Form onAdd={() => dispatch(onAdd())} />
    </View>
  );
};
export default TaskManager;
