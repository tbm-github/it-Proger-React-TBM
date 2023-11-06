import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const handleTextPress = () => console.log("Text press");
  const handleButtonPress = () =>
    Alert.alert("itTBM", "Main message", [
      { text: "Да.", onPress: () => console.log("Yes button") },
      { text: "Отмена", onPress: () => console.log("No button") },
    ]);
  const handleButtonPress2 = () =>
    Alert.prompt("itTBM", "Main message", (text) => console.log(text));
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} style={styles.text} onPress={handleTextPress}>
        {" "}
        Hi my app! Go SafeAreaView. {"\n "} Привет.{" "}
      </Text>
      <Button
        title="Нажми на меня"
        color={"pink"}
        onPress={handleButtonPress}
      />
      <Button title="Кнопка 2" color={"pink"} onPress={handleButtonPress2} />
      <TouchableWithoutFeedback onPress={handleButtonPress}>
        <Image
          source={{
            width: 200,
            height: 150,
            uri: "https://img.freepik.com/free-vector/hot-dog-street-snack-isolated-transparent_107791-18353.jpg",
          }}
        />
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "red",
  },
});
