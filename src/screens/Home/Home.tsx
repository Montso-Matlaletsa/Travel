import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { Ionicons } from '@expo/vector-icons'
import Categories from '../../components/Category'
import ShowPlaces from '../../components/ShowPlaces'


export default function Home() {

    const categories =[
        {
            name: 'All',
            id: 3
        },
        {
            name: 'Destinations',
            id: 4
        },{
            name: 'Cities',
            id: 2
        },
        {
            name: 'Experiences',
            id: 0
        }
    ]

    const places = [
      {
        id: 0,
        name: "Kome caves",
        country: "Lesotho",
        category: "Destinations",
        image: "../../../assets/places/2.png"
      },
      {
        id: 1,
        name: "table Mountain",
        country: "South Africa",
        category: "Experiences",
        image: "../../../assets/places/1.png"
      },
      {
        id: 3,
        name: "Sehlabathebe National Park",
        country: "Lesotho",
        category: "Experiences",
        image: "../../../assets/places/4.jpeg"
      },
      {
        id: 4,
        name: "UShaka Marine World",
        country: "South Africa",
        category: "Experiences",
        image: "../../../assets/places/5.jpeg"
      },
      {
        id: 5,
        name: "Mount Royal",
        country: "Lesotho",
        category: "Cities",
        image: "../../../assets/places/6.jpeg"
      },
      {
        id: 6,
        name: "Honolulu Game resort",
        country: "Hawaii",
        category: "Destination",
        image: "../../../assets/places/7.jpeg"
      }
    ]
    const [selectedValue, setSelectedValue] = useState<string>('All')
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
          <Ionicons name='ios-menu-outline' size={40}  style={styles.icon}/>
          <Image source={require('../../../assets/1.png')} style={styles.profileImage} />
          
      </View>

      <Text style={styles.title}>Discover</Text>
      <Categories categories={categories}  selectedValue={selectedValue} setSelectedValue={setSelectedValue} >
        <ShowPlaces places={places} category={selectedValue} />
      </Categories>
              
     <Text>Regina Hall</Text>
    </View>
  )
}