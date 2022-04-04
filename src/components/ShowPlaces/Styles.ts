import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    backImage:{
        width: 200,
        height: 300,
        marginRight: 20,
        borderRadius: 20,
        justifyContent: 'flex-end',
        padding: 10,
        
    },
    places:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeLabel:{
        color: 'white',
        fontSize: 15,
        marginLeft: 10
    },
    destination:{
        fontSize: 25,
        color: 'white'
    }
})