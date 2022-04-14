import { place } from "./src/@types/types";


export const categories = [
    {
      name: "All",
      id: 3,
    },
    {
      name: "Destinations",
      id: 4,
    },
    {
      name: "Cities",
      id: 2,
    },
    {
      name: "Experiences",
      id: 0,
    },
  ];

  export const places: place[] = [
    {
      id: 0,
      name: "Kome caves",
      country: "Lesotho",
      category: "Destinations",
      image: require('./assets/places/1.png'),
    },
    {
      id: 1,
      name: "Table Mountain",
      country: "South Africa",
      category: "Experiences",
      image: require("./assets/places/2.png"),
    },
    {
      id: 3,
      name: "Sehlabathebe National Park",
      country: "Lesotho",
      category: "Experiences",
      image: require("./assets/places/4.jpeg"),
    },
    {
      id: 4,
      name: "UShaka Marine World",
      country: "South Africa",
      category: "Experiences",
      image: require("./assets/places/5.jpeg"),
    },
    {
      id: 5,
      name: "Mount Royal",
      country: "Lesotho",
      category: "Cities",
      image: require("./assets/places/6.jpeg"),
    },
    {
      id: 6,
      name: "Honolulu Game resort",
      country: "Hawaii",
      category: "Destinations",
      image: require("./assets/places/7.jpeg"),
    },
  ];