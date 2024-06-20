import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import MenuItem from "../components/MenuItem";
import { AntDesign } from "@expo/vector-icons";
import { Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { CartItems } from "../context/Context";

const PosScreen = () => {
  const menus = [
    {
      id: "0",
      image: "https://picsum.photos/id/1/200/300",
      name: "Nasi",
      quantity: 1,
      price: 5000,
    },
    {
      id: "1",
      image: "https://picsum.photos/id/10/200/300",
      name: "Ikan Bakar",
      quantity: 1,
      price: 12000,
    },
    {
      id: "2",
      image: "https://picsum.photos/id/100/200/300",
      name: "Bebek Bakar",
      quantity: 1,
      price: 32000,
    },
    {
      id: "3",
      image: "https://picsum.photos/id/500/200/300",
      name: "Ayam Geprek",
      quantity: 1,
      price: 17000,
    },
    {
      id: "4",
      image: "https://picsum.photos/id/78/200/300",
      name: "Ayem Penyet",
      quantity: 1,
      price: 18000,
    },
    {
      id: "5",
      image: "https://picsum.photos/id/88/200/300",
      name: "Telor Dadar",
      quantity: 1,
      price: 8000,
    },
    {
      id: "6",
      image: "https://picsum.photos/id/90/200/300",
      name: "Daging Rendang",
      quantity: 1,
      price: 20000,
    },
    {
      id: "7",
      image: "https://picsum.photos/id/44/200/300",
      name: "Teh Obeng",
      quantity: 1,
      price: 5000,
    },
    {
      id: "8",
      image: "https://picsum.photos/id/77/200/300",
      name: "Ayam Bumbu",
      quantity: 1,
      price: 20000,
    },
    {
      id: "9",
      image: "https://picsum.photos/id/99/200/300",
      name: "Es Jeruk",
      quantity: 0,
      price: 5000,
    },
    {
      id: "10",
      image: "https://picsum.photos/id/90/200/300",
      name: "Daging Rendang",
      quantity: 1,
      price: 20000,
    },
    {
      id: "11",
      image: "https://picsum.photos/id/44/200/300",
      name: "Teh Obeng",
      quantity: 1,
      price: 5000,
    },
    {
      id: "12",
      image: "https://picsum.photos/id/77/200/300",
      name: "Ayam Bumbu",
      quantity: 1,
      price: 20000,
    },
    {
      id: "13",
      image: "https://picsum.photos/id/99/200/300",
      name: "Es Jeruk",
      quantity: 0,
      price: 5000,
    },
    {
      id: "14",
      image: "https://picsum.photos/id/44/200/300",
      name: "Teh Obeng",
      quantity: 1,
      price: 5000,
    },
    {
      id: "15",
      image: "https://picsum.photos/id/77/200/300",
      name: "Ayam Bumbu Padang",
      quantity: 1,
      price: 20000,
    },
    {
      id: "16",
      image: "https://picsum.photos/id/99/200/300",
      name: "Es Jeruk",
      quantity: 0,
      price: 5000,
    },
  ];

  const [total, setTotal] = useState(0);
  const navigation = useNavigation();

  const { cart, setCart } = useContext(CartItems);

  const handleAddToCart = () => {
    console.log("checkout");
    navigation.navigate("Checkout");
  };

  const handleSelectItem = (item) => {
    navigation.navigate("OrderItem", { item: item });
  };

  function priceWithComma(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "flex-end", marginRight: 10 }}>
        <AntDesign name="swap" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 30,
          borderWidth: 1,
          marginVertical: 5,
          marginHorizontal: 5,
          borderRadius: 5,
        }}
      >
        <AntDesign
          name="search1"
          size={20}
          color="black"
          style={{ margin: 5 }}
        />
        <TextInput placeholder="Search Item..." />
      </View>
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {menus.map((item, index) => (
            <View
              style={{
                margin: 5,
              }}
            >
              <MenuItem item={item} key={index} selectItem={handleSelectItem} />
            </View>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "blue",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingVertical: 5,
        }}
        flexDirection="row"
      >
        <Text style={{ fontSize: 28, color: "white", marginLeft: 20 }}>
          Rp {priceWithComma(total)}
        </Text>

        <Pressable onPress={handleAddToCart}>
          <AntDesign
            name="shoppingcart"
            size={40}
            color="white"
            style={{ marginRight: 20 }}
          />
          <Badge
            status="error"
            value={cart.length}
            containerStyle={{
              position: "absolute",
              bottom: 40,
              height: 20,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
