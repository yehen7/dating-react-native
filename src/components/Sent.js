import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
const Sent = ({message}) => {
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.gradient} colors={['#f26a50','#f20045']}>
            <Text style={styles.message}>{message}</Text>
            </LinearGradient>
            <Text style={styles.duration}>12.12 AM</Text>
        </View>
    )
}

export default Sent

const styles = StyleSheet.create({

    container:{
        marginVertical:25,
        alignSelf:'flex-end'
    },
duration:{
    fontSize:11,
    color:'#b6b6b6',
    alignSelf:'flex-end',
    marginTop:5,
    fontFamily:'600SemiBold'
},
gradient:{
    alignItems:'center',
    justifyContent:'center',
    maxWidth:220,
    paddingHorizontal:20,
    paddingVertical:10,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomLeftRadius:25
},
message:{
    color:"#fff",
    fontFamily:'Montserrat_700Bold'
}


})
