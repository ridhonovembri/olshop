import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const CheckoutScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "flex-end", marginRight: 10 }}>
        <Pressable onPress={() => navigation.navigate("POS")}>
          <AntDesign name="closecircleo" size={24} color="black" />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FontAwesome5
          name="user-alt"
          size={15}
          color="black"
          style={{ margin: 12 }}
        />
        <Text>Check Out</Text>
        <MaterialIcons name="add" size={24} color="black" />
      </View>

      <View>
        
      </View>

    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
