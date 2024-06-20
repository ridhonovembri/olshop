import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SUPABASE_KEY, SUPABASE_URL } from "../lib/config";
import { createClient } from "@supabase/supabase-js";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { supabaseClient } from '../lib/supabase'
// import { supabase } from "../../supabase";
// import { registerRootComponent } from "expo";


const ProductType = () => {
  const [productType, setProductType] = useState([]);
  const [newProductCode, setNewProductCode] = useState("");
  const [newProductName, setNewProductName] = useState("");
  const [editMode, setEditMode] = useState(false);

  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
    detectSessionInUrl: false,
    localStorage: AsyncStorage
  });


  const fetchProductType = async () => {
    const { data, error } = await supabaseClient.from("product_type").select();

    console.log(data)

    if (error) {
      console.log(error);
    } else {
      setProductType(data);
    }
  };

  const handleAdd = async () => {
    // console.log("add", newProductType);

    if (!editMode) {
      const { error } = await supabaseClient.from("product_type").insert({
        product_type_code: newProductCode,
        product_type_name: newProductName,
      });

      if (error) {
        console.log(error);
      } else {
        await fetchProductType();
      }
    } else {
      const { error } = await supabaseClient.from("product_type").update({
        product_type_code: newProductCode,
        product_type_name: newProductName,
      }).eq('id', 1);

      if (error) {
        console.log(error);
      } else {
        await fetchProductType();
      }
    }

    setNewProductCode("");
    setNewProductName("");
  };

  const handleEdit = (item) => {
    // console.log("edit", item);
    setNewProductCode(item.product_type_code);
    setNewProductName(item.product_type_name);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    // console.log("delete==>", id);
    const { error } = await supabaseClient
      .from("product_type")
      .delete()
      .match({ id });

    if (error) {
      console.log(error);
    } else {
      fetchProductType();
    }
  };

  useEffect(() => {
    fetchProductType();
  }, []);

  return (
    <View>
      <View
        style={{
          height: 40,
          borderWidth: 1,
          marginHorizontal: 5,
          borderRadius: 10,
          justifyContent: "center",
          padding: 5,
        }}
      >
        <TextInput
          placeholder="Kode Kategori"
          onChangeText={(text) => setNewProductCode(text)}
          value={newProductCode}
        />
      </View>
      <View
        style={{
          height: 40,
          borderWidth: 1,
          marginHorizontal: 5,
          borderRadius: 10,
          justifyContent: "center",
          padding: 5,
        }}
      >
        <TextInput
          placeholder="Nama Kategorix"
          onChangeText={(text) => setNewProductName(text)}
          value={newProductName}
        />
      </View>
      <Pressable
        style={{
          height: 40,
          backgroundColor: "black",
          marginVertical: 10,
          marginHorizontal: 5,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={handleAdd}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
          Tambah
        </Text>
      </Pressable>
      <View>
        <FlatList
          data={productType}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: "row",
                height: 40,
                backgroundColor: "white",
                borderWidth: 0,
                marginVertical: 5,
                marginHorizontal: 5,
                borderRadius: 10,
                justifyContent: "space-around",
                paddingLeft: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ flex: 1 }}>{item.product_type_code}</Text>
              <Text style={{ flex: 1 }}>{item.product_type_name}</Text>

              <Pressable onPress={() => handleEdit(item)}>
                <AntDesign name="edit" size={24} color="black" />
              </Pressable>
              <Pressable onPress={() => handleDelete(item.id)}>
                <AntDesign name="delete" size={24} color="black" />
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default ProductType;

const styles = StyleSheet.create({});
