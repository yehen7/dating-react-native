import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LastWatch = ({checkedOn}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{checkedOn}</Text>
        </View>
    )
}

export default LastWatch

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#fff',
        elevation:3,
        paddingVertical:2,
        paddingHorizontal:15,
        alignItems:'center',
        justifyContent:'center',
        width:100, 
        borderRadius:15,
        alignSelf:'center',
        marginTop:25

    },

    text:{
        fontSize:12,
        color:'#f20045',
        fontFamily:' Montserrat_600SemiBold',
    }
 

})
