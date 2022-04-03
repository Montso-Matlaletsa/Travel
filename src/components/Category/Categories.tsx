import { View, Text } from 'react-native'
import React, { FC, ReactElement } from 'react'
import { styles } from './styles'

export type categoriesProps={
  categories: {name:string, id: number}[],
  children: ReactElement,
  selectedValue: string,
  setSelectedValue: (category: string)=>void
}
export const Categories:FC<categoriesProps> =({categories, children, selectedValue, setSelectedValue }) =>{
  return (
    <View style={styles.container}>
    
    <View style={styles.categorycontainer}>
    {
          categories.map((category)=>(
            <Text key={category.id}
              onPress={()=> setSelectedValue(category.name)}
              style={[styles.category,selectedValue === category.name && styles.selectedCategory]}
            >{category.name}
            </Text>
          ))
        }
    </View>

   
      {children}
    </View>
  )
}