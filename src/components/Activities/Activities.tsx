import { ScrollView, Image, View, Text } from "react-native";
import React, { FC } from "react";
import { styles } from "./Styles";
import { Activity } from "../../@types/types";

interface IActivityProps {
  activities: Activity[];
}

const Activities: FC<IActivityProps> = ({ activities }) => {
  return (
    <ScrollView
      style={{ maxHeight: 85 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexWrap: "wrap" }}
    >
      {activities.map((activity, index) => (
        <View style={styles.activityContainer} key={activity.id}>
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
