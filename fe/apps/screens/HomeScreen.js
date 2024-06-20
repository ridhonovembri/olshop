import { StyleSheet, Text, View, StatusBar } from "react-native";
import React, { useEffect } from "react";
// import { createClient } from "@supabase/supabase-js";
// import getTodos  from '../supabase/supabase-get'
// import supabase from "../lib/supabase";

const HomeScreen = () => {
  useEffect(() => {
    // const supabase_url = "https://mjepqqyzxfjrkfgfyiaf.supabase.co";
    // const supabase_key =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZXBxcXl6eGZqcmtmZ2Z5aWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg1MTkzOTYsImV4cCI6MjAzNDA5NTM5Nn0.F5EyO3rSaqIuE71mDHBBjYrhXmsakL_4jFu5dLmqYIc";

    // const supabase = createClient(supabase_url, supabase_key);

    const fetchTodos = async () => {
      // console.log(supabase)
      // const { data, error } = await supabase.from("todos").select();


      // if (error) {
      //   console.log("cannot fetch todos data");
      // }

      // if (data) {
      //   console.log(data);
      // }
    };

    fetchTodos()
  }, []);

  return (
    <View style={styles.container}>
      <Text>HomeScreenxxx</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
