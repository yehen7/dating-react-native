import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

const Profiles = ({username,uri}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:uri}} style={styles.avatarStyle}/>
            <Text style={styles.nameStyle}>{username}</Text>
        </View>
    )
}

export default Profiles

const styles = StyleSheet.create({

    container:{
        alignItems:'center',
        marginTop:20,
        marginRight:17
    },

    avatarStyle:{
        height:60,
        width:60,
        borderRadius:30
    },
    nameStyle:{
     marginTop:10,
        color:"#fff",
        fontSize:11,
        fontFamily:  'Montserrat_700Bold',
    }


})
