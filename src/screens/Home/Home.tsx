import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { Ionicons } from '@expo/vector-icons'
import Categories from '../../components/Category'

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
    const [selectedValue, setSelectedValue] = useState<string>('All')
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
          <Ionicons name='ios-menu-outline' size={40}  style={styles.icon}/>
          <Image source={require('../../../assets/1.png')} style={styles.profileImage} />
          
      </View>

      <Text style={styles.title}>Discover</Text>
      <Categories categories={categories}  selectedValue={selectedValue} setSelectedValue={setSelectedValue} >
        <Text>{selectedValue}</Text>
      </Categories>
              
     
    </View>
  )
}