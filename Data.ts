import { Activity, image, Place } from "./src/@types/types";


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

  export const places: Place[] = [
    {
      id: 0,
      name: "Kome caves",
      country: "Lesotho",
      category: "Destinations",
      image: require('./assets/places/1.png'),
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,',
      price: 200,
      rating: 3.8,
      duration: 1
    },
    {
      id: 1,
      name: "Table Mountain",
      country: "South Africa",
      category: "Experiences",
      image: require("./assets/places/2.png"),
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,',
      price: 3000,
      rating: 4.5,
      duration: 5
    },
    {
      id: 3,
      name: "Sehlabathebe National Park",
      country: "Lesotho",
      category: "Experiences",
      image: require("./assets/places/4.jpeg"),
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,',
      price: 150,
      rating: 2.1,
      duration: 24
    },
    {
      id: 4,
      name: "UShaka Marine World",
      country: "South Africa",
      category: "Experiences",
      image: require("./assets/places/5.jpeg"),
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,',
      price: 30,
      rating: 5,
      duration: 0.5
    },
    {
      id: 5,
      name: "Mount Royal",
      country: "Lesotho",
      category: "Cities",
      image: require("./assets/places/6.jpeg"),
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,',
      price: 830,
      rating: 4.3,
      duration: 4
    },
    {
      id: 6,
      name: "Honolulu Game resort",
      country: "Hawaii",
      category: "Destinations",
      image: require("./assets/places/7.jpeg"),
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,',
      price: 6000,
      rating: 4.7,
      duration: 12
    },
  ];

  export const ActivityList:Activity[] = [
      {
          title: 'Hike',
          image: require("./assets/icons/Vector-1.png"),
          id: 0
      },
      {
        title: 'Water Ski',
        image: require("./assets/icons/Vector-2.png"),
        id: 1
    },
    {
        title: 'Spa',
        image: require("./assets/icons/Vector-3.png"),
        id: 2
    },
    {
        title: 'tennis',
        image: require("./assets/icons/Vector-4.png"),
        id: 3
    }
    ,{
        title: 'kayak',
        image: require("./assets/icons/Vector.png"),
        id: 4
    }
  ]

  export const MoreImages:image[] = [
    {
      id: 0,
      image: require("./assets/more/australia.png"),
    },
    {
        id: 1,
        image: require("./assets/more/beach.png"),
      },
      {
        id: 2,
        image: require("./assets/more/boatbeach.png"),
      },
]