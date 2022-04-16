import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Place, RootStackProps } from "../../@types/types";
import { styles } from "./Styles";
import { Ionicons } from "@expo/vector-icons";
import { places } from "../../../Data";
import { ActivityIndicator } from "react-native-paper";

const ViewPlace = () => {
  const { goBack, navigate } =
    useNavigation<NativeStackNavigationProp<RootStackProps, "ViewPlace">>();
  const RouteBackToMain = useCallback(() => goBack(), [navigate]);

  const route = useRoute<RouteProp<RootStackProps, "ViewPlace">>();
  const [place, setPlace] = useState<Place>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const newPlace = places.find((place) => place.id === route.params.place_id);
    console.log(newPlace);
    setPlace(newPlace);
    setLoading(false);
  }, [place, place?.image]);

  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color="orange" size={"large"} />
        </View>
      ) : (
        <ScrollView>
          <ImageBackground style={styles.background} source={place?.image}>
            <Pressable style={styles.backBtn} onPress={RouteBackToMain}>
              <Ionicons
                name="chevron-back"
                size={40}
                style={{ color: "white" }}
              />
            </Pressable>

            <View style={styles.place}>
              <Text style={styles.title}>{place?.name}</Text>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="md-location-sharp" size={20} color={"white"} />
                <Text style={styles.country}>{place?.country}</Text>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.card}>
            <Text style={styles.descriptionTitle}>Description</Text>

            <Text style={styles.description}>{place?.description}</Text>

            <View style={styles.prices}>
              <View style={styles.titles}>
                <Text style={{ color: "grey" }}>PRICE</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.values}>{`$${place?.price}`}</Text>
                  <Text style={styles.label}>/person</Text>
                </View>
              </View>

              <View style={styles.titles}>
                <Text style={{ color: "grey" }}>RATINGS</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.values}>{place?.rating}</Text>
                  <Text style={styles.label}>/5</Text>
                </View>
              </View>

              <View style={styles.titles}>
                <Text style={{ color: "grey" }}>DURATION</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.values}>{place?.duration}</Text>
                  <Text style={styles.label}>/hours</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#F35D38",
                height: 60,
                margin: 20,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ViewPlace;
