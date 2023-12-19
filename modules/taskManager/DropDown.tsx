import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Images } from "./Images";

type Data = {
  key: string;
  value: string;
};
type Props = {
  data: Data[];
  selectValue: Data;
  oneSelect: (val: Data) => void;
};
export const DropDown = ({ data, selectValue, oneSelect }: Props) => {
  const [option, setOption] = React.useState(false);

  const selectOption = () => {
    setOption(!option);
  };

  const oneSelectItem = (val: Data) => {
    setOption(false);
    oneSelect(val);
  };
  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity style={styles.dropDownStyle} onPress={selectOption}>
        <Text>
          {selectValue.value != "" ? selectValue.value : "Choose Option"}
        </Text>
        <Image
          source={Images.arrow_drop_down}
          style={{
            transform: [{ rotate: option ? "180deg" : "0deg" }],
          }}
        ></Image>
      </TouchableOpacity>

      {option && (
        <View style={styles.openDropDown}>
          {data.map((val, i) => {
            return (
              <TouchableOpacity
                key={val.key}
                onPress={() => oneSelectItem(val)}
                style={{
                  ...styles.optionName,
                  backgroundColor:
                    val.key === selectValue.key ? "pink" : "white",
                }}
              >
                <Text>{val.value}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {},
  dropDownStyle: {
    minHeight: 40,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
    padding: 5,
    borderWidth: 1,
  },
  openDropDown: {
    backgroundColor: "red",
    padding: 10,
    marginVertical: 5,
    zIndex: 1,
  },
  optionName: {
    margin: 5,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
  },
  openModal: {
    marginTop: 190,
    backgroundColor: "gray",
    width: "80%",
    marginLeft: "10%",
  },
});
