import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 20,
        textAlign: 'center'
    },
    category:{
        flex: 1,
        color: 'grey',
        flexGrow: 1,
        marginBottom: 20,
        textAlign: 'center'
    },
    selectedCategory: {
        color: 'orange'
    }
    
})