import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { DropDown } from "./DropDown";

type Data = {
  key: string;
  value: string;
};
type Props = {
  data: Data[];
  onSelect: (text: string) => void;
};

export const Filter = (props: Props) => {
  const [selectValue, setSelectValue] = useState({ key: "", value: "" });

  const selected = (item: Data) => {
    setSelectValue(item);
    props.onSelect(item.key);
  };

  return (
    <View style={styles.container}>
      <DropDown
        selectValue={selectValue}
        data={props.data}
        oneSelect={selected}
      ></DropDown>
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
