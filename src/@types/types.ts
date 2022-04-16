

export interface BottomNavProps
{
    HOME: 'Home',
    FAVORITES: 'Favorites',
    PROFILE: 'Profile'
}

export type BottomTabs = {
    Home: undefined;
    Favorites: undefined;
    Profile: undefined;
}

export type RootStackProps={
    BottomTabs: BottomTabs;
    ViewPlace: {place_id: number};
}

export const StackNavigation= {
    BOTTOM_TABS:'BottomTabs',
    VIEW_PLACE: "ViewPlace",
  }


  
  export type Place = {  
    id: number,
    image: string,
    name: string,
    country: string
    category: string,
    description: string,
    rating: number,
    price: number,
    duration: number
  }

  export const Categories = {
    DESTINATIONS:'Destinations',
    All : "All",
    CITIES: "Cities",
    EXPERIENCES: "Experiences"
  }

  export type Activity={
      id: number;
      image: string;
      title: string;
  }

  export type image={
      id: number,
      image: string
  }