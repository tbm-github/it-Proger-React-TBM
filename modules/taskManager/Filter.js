import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export const Filter = (props) => {
  const [selected, setSelected] = useState("");

  return (
    <View style={styles.container}>
      <SelectList
        defaultOption={{ key: "all", value: "all" }}
        setSelected={setSelected}
        data={props.data}
        onSelect={() => {
          props.onSelect(selected);
          console.log(selected);
        }}
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
