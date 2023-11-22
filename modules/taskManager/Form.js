import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export const Form = (props) => {
  const [text, setValue] = useState("");

  const onChange = (text) => {
    setValue(text);
  };
  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="New Task"
      ></TextInput>
      <Button title="Add" onPress={() => props.onAdd(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "80%",
  },
});
