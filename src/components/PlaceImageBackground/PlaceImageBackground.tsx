import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { FC, useCallback } from "react";
import { Place, RootStackProps, StackNavigation } from "../../@types/types";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import RootStack from "../../navigation/RootStack";
import { places } from "../../../Data";

interface placeProps {
  place: Place;
}

const PlaceImageBackground: FC<placeProps> = ({ place }) => {
  const { navigate, push } =
    useNavigation<NativeStackNavigationProp<RootStackProps>>();

  const RouteToViewPlace = useCallback(
    () => push("ViewPlace", { place_id: place.id }),
    [navigate]
  );

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
    <Pressable onPress={RouteToViewPlace}>
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
    </Pressable>
  );
};

export default PlaceImageBackground;
