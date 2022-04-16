import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    background:{
        width: '100%',
        height: 400,
        
    },
    backBtn:{
        marginTop: Platform.OS === 'ios' ? 40 : 20
    },
    title:{
        fontSize: 35,
        fontWeight: '700',
        color: 'white',
    },
    place:{
        margin: 20,
        bottom: 20,
        position: 'absolute'
    },
    country:{
        color: 'white',
        fontSize: 20,
        marginLeft: 15
    },
    card:{
        backgroundColor: "white",
        flex: 1,
        bottom: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    descriptionTitle:{ 
        fontSize: 25,
        margin: 20,
        marginTop: 20,
        fontWeight: "700" 
    },
    description: {
        marginLeft: 20, 
        marginRight: 20,
        color: "grey", 
        fontSize: 15 
    }, 
    prices:{
        flexDirection: "row",
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    titles:{
        flex: 1,
        alignItems: "center"
    },
    values:{
        color: "#F35D38",
        fontSize: 20,
        fontWeight: "bold"
    },
    label:{
        marginTop: 4,
        color: "grey", 
        fontSize: 15
    }
})