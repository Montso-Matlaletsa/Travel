

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