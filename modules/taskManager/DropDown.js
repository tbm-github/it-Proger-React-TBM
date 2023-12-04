import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Images } from "./Images";

export const DropDown = ({ data, selectValue, oneSelect }) => {
  const [option, setOption] = React.useState(false);

  const selectOption = () => {
    setOption(!option);
  };

  const oneSelectItem = (val) => {
    setOption(false);
    oneSelect(val);
  };

  return (
    <View style={{}}>
      <TouchableOpacity style={styles.dropDownStyle} onPress={selectOption}>
        <Text>{!!selectValue ? selectValue.value : "Choose Option"}</Text>
        <Image
          source={Images.arrow_drop_down}
          style={{
            transform: [{ rotate: option ? "180deg" : "0deg" }],
          }}
        ></Image>
      </TouchableOpacity>

      {option && (
        <View style={styles.openDropDown}>
          <Modal visible={option} transparent animationType="none">
            <View style={styles.openModal}>
              {data.map((val, i) => {
                return (
                  <TouchableOpacity
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
          </Modal>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownStyle: {
    // backgroundColor: "#eab676",
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
    // backgroundColor: "red",
    padding: 10,
    marginVertical: 5,
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
