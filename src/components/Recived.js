import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Recived = ({image,message}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:image}} style={styles.img}   />
            <View>
            <Text style={styles.message}>{message}</Text>
            <Text style={styles.duration}>12:12 AM</Text>
            </View>
           
        </View>
    )
}

export default Recived

const styles = StyleSheet.create({

    container:{
    flexDirection:'row',
    marginTop:20,
    width:250
    },
    img:{
        width:40,
        height:40,
        borderRadius:20
    },
    message:{
       fontSize:13,
       marginHorizontal:15,
       fontFamily:'Montserrat_700Bold'

    },
    duration:{
        color:'#b6b6b6',
        fontSize:11,
        marginTop:5,
        marginHorizontal:15,
        fontFamily:'Montserrat_600SemiBold'
    }


})
