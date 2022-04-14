import { View, Text, ScrollView, ImageBackground } from "react-native";
import React, { FC } from "react";
import { styles } from "./Styles";
import { Ionicons } from "@expo/vector-icons";

interface ISHowPlaces {
  places: {
    id: number;
    image: string;
    name: string;
    country: string;
    category: string;
  }[];
  category: string;
}
export const ShowPlaces: FC<ISHowPlaces> = ({ places, category }) => {
  return (
    <ScrollView horizontal={true}>
      {places.map((place) => (
        <ImageBackground
          //@ts-ignore
          source={place.image}
          style={styles.backImage}
          resizeMode={"cover"}
          key={place.id}
          imageStyle={{ borderRadius: 10 }}
        >
          <Text style={styles.destination}>{place.name}</Text>
          <View style={styles.places}>
            <Ionicons name="location" size={20} color={"white"} />
            <Text style={styles.placeLabel}>{place.country}</Text>
          </View>
        </ImageBackground>
      ))}
    </ScrollView>
  );
};
