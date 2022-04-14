import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        marginTop: Platform.OS === 'ios'? 40 : 20
    },
    topBar:{
        flexDirection: 'row',
       height: 50,
       alignItems: 'center'
    },
    icon:{
        textAlignVertical: 'center',
        flex: 1
    },
    profileImage:{
        width: 50,
        height: '100%'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        
    }
})