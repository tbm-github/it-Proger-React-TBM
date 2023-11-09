import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { gStyle } from "../styles/style";

export default function Main({ navigation }) {
  //   const loadScene = () => {
  //     navigation.navigate("Contacts");
  //   };
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool!",
      key: "1",
      img: "https://itproger.com/img/courses/x1689098975.jpg.pagespeed.ic.CC1iDGn1OX.webp",
    },
    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple is cool!",
      key: "2",
      img: "https://itproger.com/img/courses/x1684166156.jpg.pagespeed.ic.-P1CgSDYtb.webp",
    },
    {
      name: "FaceBiook",
      anons: "FaceBiook!!!",
      full: "FaceBiook is cool!",
      key: "3",
      img: "https://itproger.com/img/courses/x1683273533.jpg.pagespeed.ic.UiAFFCXkXJ.webp",
    },
  ]);

  return (
    <View style={gStyle.main}>
      <Text style={(gStyle.title, styles.header)}> Главная страница </Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image
              source={{
                width: "100%",
                height: 200,
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name} </Text>
            <Text style={styles.anons}>{item.anons} </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontFamily: "mt-bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
});
