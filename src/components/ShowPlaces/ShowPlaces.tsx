import { ScrollView } from "react-native";
import React, { FC } from "react";
import { Place } from "../../@types/types";
import PlaceImageBackground from "../PlaceImageBackground/";

interface ISHowPlaces {
  places: Place[];
  category: string;
}

export const ShowPlaces: FC<ISHowPlaces> = ({ places, category }) => {
  const destinations = places.filter(
    (place) => place.category === "Destinations"
  );

  const experiences = places.filter(
    (place) => place.category === "Experiences"
  );

  const cities = places.filter((place) => place.category === "Cities");
  return (
    <ScrollView horizontal={true}>
      {category === "All"
        ? places.map((place) => <PlaceImageBackground place={place} />)
        : category === "Destinations"
        ? destinations.map((place, index) => (
            <PlaceImageBackground place={place} />
          ))
        : category === "Cities"
        ? cities.map((place) => <PlaceImageBackground place={place} />)
        : category === "Experiences" &&
          experiences.map((place) => <PlaceImageBackground place={place} />)}
    </ScrollView>
  );
};
