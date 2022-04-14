import { ImageProps, ImageSourcePropType } from "react-native";

export interface IPlaceProps{
    name: string;
    id: number;
    country: string;
    image: ImageSourcePropType;
    category: string;
}