import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        marginBottom: 20
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