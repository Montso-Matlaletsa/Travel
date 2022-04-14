import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import Categories from "../../components/Category";
import ShowPlaces from "../../components/ShowPlaces";
import { categories, places } from "../../../Data";
import Activities from "../../components/Activities";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState<string>("All");
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Ionicons name="ios-menu-outline" size={40} style={styles.icon} />
        <Image
          source={require("../../../assets/1.png")}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.title}>Discover</Text>
      <Categories
        categories={categories}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      >
        {/* @ts-ignore */}
        <ShowPlaces places={places} category={selectedValue} />
      </Categories>

      <Text style={styles.title}>Activities</Text>
      <Activities />
    </View>
  );
}
