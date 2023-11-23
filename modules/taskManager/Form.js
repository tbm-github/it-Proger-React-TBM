import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export const Form = (props) => {
  const [text, setValue] = useState("");

  const onChange = (text) => {
    setValue(text);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="New Task"
      ></TextInput>
      <Button
        style={styles.btn}
        title="Add"
        onPress={() => props.onAdd(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    width: "80%",
    marginLeft: "10%",
    borderWidth: 1,
  },
  input: {
    padding: 10,
    fontSize: 18,
    color: "black",
    textAlign: "left",
    width: "80%",
    borderWidth: 1,
  },
  btn: {
    fontSize: 18,
    color: "black",
    borderRadius: 3,
    backgroundColor: "red",
    borderWidth: 1,
  },
});
