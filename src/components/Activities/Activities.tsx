import { ScrollView, Image, View, Text } from "react-native";
import React from "react";
import { ActivityList } from "../../../Data";
import { styles } from "./Styles";

const Activities = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {ActivityList.map((activity, index) => (
        <View style={styles.activityContainer}>
          <Image
            //@ts-ignore
            source={activity.image}
            style={styles.image}
            resizeMode={"contain"}
          />
          <Text style={styles.title}>{activity.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Activities;
