import { View, Image, ScrollView } from "react-native";
import React, { FC } from "react";
import { image } from "../../@types/types";
import { styles } from "./Styles";

interface IMoreProps {
  images: image[];
}
const More: FC<IMoreProps> = ({ images }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {images.map((image, index) => (
        <View style={styles.container}>
          {/* @ts-ignore */}
          <Image source={image.image} key={image.id} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

export default More;
