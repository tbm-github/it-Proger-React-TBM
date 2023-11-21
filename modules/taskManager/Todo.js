import { Text, View } from "react-native";

export const Todo = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};
