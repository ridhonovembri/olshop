import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { CartItems } from "../context/Context";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

const OrderItemScreen = ({ route }) => {
  // console.log(route.params.item.name)
  const { name, price, quantity } = route.params.item;

  const [addItem, setAddItem] = useState(1);

  const { cart, setCart } = useContext(CartItems);

  console.log("cart", cart);
  console.log("number of items", cart.length);

  const [discount, setDiscount] = useState(0);

  const navigation = useNavigation();

  const handleOrder = () => {
    setAddItem(0);
    navigation.navigate("POS");
  };

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 38 }}>Order Item</Text>
          <Pressable onPress={() => navigation.navigate("POS")}>
            <AntDesign name="closecircleo" size={24} color="black" />
          </Pressable>
        </View>
        <View style={{ marginBottom: 10, borderBottomWidth: 1 }}>
          <Text>Item</Text>
          <Text style={{ fontSize: 20 }}>{name}</Text>
        </View>
        <View style={{ marginBottom: 10, borderBottomWidth: 1 }}>
          <Text>Harga</Text>
          <Text style={{ fontSize: 20 }}>{price}</Text>
        </View>

        <Text>Qty</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>{addItem}</Text>

          <View
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FF3366",
              borderRadius: 5,
            }}
          >
            <Pressable
              onPress={() => {
                setCart(cart.filter((p) => p.id !== route.params.id));
                setAddItem(Math.max(0, addItem - 1));
              }}
            >
              <Text
                style={{ fontSize: 25, color: "white", paddingHorizontal: 10 }}
              >
                -
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                setCart([...cart, route.params.item]);
                setAddItem(addItem + 1);
              }}
            >
              <Text
                style={{ fontSize: 20, color: "white", paddingHorizontal: 10 }}
              >
                +
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={{ marginBottom: 10, borderBottomWidth: 1 }}>
          <Text>Discount</Text>
          <TextInput
            style={{
              height: 30,
              margin: 2,
              borderWidth: 0,
              padding: 5,
              fontSize: 20,
            }}
            value={discount}
            keyboardType="numeric"
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Notes</Text>
          <TextInput
            style={{
              height: 30,
              margin: 2,
              borderWidth: 0,
              padding: 5,
              fontSize: 20,
              borderWidth: 0,
            }}
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
          />
        </View>
      </View>
      <Pressable style={{alignItems:'flex-end'}}>
        <View
          style={{
            width: "20%",
            height: 40,
            backgroundColor: "red",            
            marginBottom: 10,      
            marginRight: 10,      
            borderRadius: 10,            
            justifyContent:'center',
            flexDirection:'row',
            alignItems:'center',
          }}
        >
          <FontAwesome name="close" size={24} color="black" />
          <Text style={{fontSize:16, padding: 5}}>Void</Text>
        </View>
      </Pressable>
      <Pressable onPress={handleOrder}>
        <View
          style={{
            alignContent: "flex-end",
            height: 50,
            backgroundColor: "blue",              
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Save
          </Text>
        </View>
      </Pressable>
    </>
  );
};

export default OrderItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginHorizontal: 5,
  },
});
