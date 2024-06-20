import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const MenuItem = ({ item, selectItem }) => {
  const { name, image, price } = item;

  const itemName = (item) => {
    let name = item.split(" ");

    let combineName = "";

    for (let i = 0; i < name.length; i++) {
      let firstLetter = name[i][0];
      combineName = combineName.concat(firstLetter);
    }

    return combineName;
  };

  function priceWithComma(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <View>
      <Pressable onPress={() => selectItem(item)}>
        <View style={{ borderWidth: 1, width: 120, height: 130 }}>
          {/* <Image
            source={{ uri: image }}
            style={{ height: 100, borderRadius: 10 }}
            resizeMode='stretch'
          /> */}
          {/* <Text numberOfLines={1} style={{ fontSize: 14 }}>{name}</Text> */}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#90EE90",
            }}
          >
            <View style={{ height: 90, justifyContent: "center" }}>
              <Text style={{ fontSize: 58, color:'white' }}>{itemName(name)}</Text>
            </View>
          </View>
          <Text
            numberOfLines={1}
            style={{ fontSize: 14, color: "#1034A6", marginLeft: 5 }}
          >
            {name}
          </Text>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 14, fontWeight: "bold", marginRight: 5 }}>
              {priceWithComma(price)}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
