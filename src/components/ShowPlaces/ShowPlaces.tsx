import { ScrollView } from "react-native";
import React, { FC } from "react";
import { Categories, Place } from "../../@types/types";
import PlaceImageBackground from "../PlaceImageBackground/";

interface ISHowPlaces {
  places: Place[];
  category: string;
}

export const ShowPlaces: FC<ISHowPlaces> = ({ places, category }) => {
  const destinations = places.filter(
    (place) => place.category === Categories.DESTINATIONS
  );

  const experiences = places.filter(
    (place) => place.category === Categories.EXPERIENCES
  );

  const cities = places.filter((place) => place.category === Categories.CITIES);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {category === Categories.All
        ? places.map((place) => (
            <PlaceImageBackground place={place} key={place.id} />
          ))
        : category === Categories.DESTINATIONS
        ? destinations.map((place) => (
            <PlaceImageBackground place={place} key={place.id} />
          ))
        : category === Categories.CITIES
        ? cities.map((place) => (
            <PlaceImageBackground place={place} key={place.id} />
          ))
        : category === Categories.EXPERIENCES &&
          experiences.map((place) => (
            <PlaceImageBackground place={place} key={place.id} />
          ))}
    </ScrollView>
  );
};
