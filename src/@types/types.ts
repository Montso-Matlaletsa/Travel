

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


  
  export type Place = {  
    id: number,
    image: string,
    name: string,
    country: string
    category: string,
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