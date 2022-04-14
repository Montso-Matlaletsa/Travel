import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Place } from "../../@types/types";
import { Ionicons } from "@expo/vector-icons";

interface placeProps {
  place: Place;
}

const PlaceImageBackground: FC<placeProps> = ({ place }) => {
  const styles = StyleSheet.create({
    backImage: {
      width: 200,
      height: 300,
      marginRight: 20,
      justifyContent: "flex-end",
      padding: 10,
    },
    places: {
      flexDirection: "row",
      alignItems: "center",
    },
    placeLabel: {
      color: "white",
      fontSize: 15,
      marginLeft: 10,
    },
    destination: {
      fontSize: 25,
      color: "white",
    },
  });
  return (
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
  );
};

export default PlaceImageBackground;
