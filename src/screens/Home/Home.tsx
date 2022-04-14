import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import Categories from "../../components/Category";
import ShowPlaces from "../../components/ShowPlaces";
import { ActivityList, categories, MoreImages, places } from "../../../Data";
import Activities from "../../components/Activities";
import More from "../../components/More";

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
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

        <Activities activities={ActivityList} />
        <Text style={styles.title}>Learn More</Text>

        <More images={MoreImages} />
      </ScrollView>
    </View>
  );
}
