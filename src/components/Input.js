import React from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import Ionicons from '@expo/vector-icons/Ionicons'
const Input = ({inputMessage,setMessage,onSendPress}) => {
    return (
        <View style={styles.container}>
            <Entypo color='#fff' size={20} name='emoji-happy'/>
            <TextInput
            placeholder='type message'
            value={inputMessage}
            onChangeText={setMessage}
            style={styles.input}
            
            
            />
            <TouchableOpacity onPress={onSendPress}>
             <Ionicons color='#fff' size={20} name='ios-send'/>
            </TouchableOpacity>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        width:'85%',
        backgroundColor:'rgba(0,0,0,0.2)',
        bottom:10,
        position:'absolute',
        borderRadius:30,
        paddingHorizontal:20,
        paddingVertical:10

    },

    input:{
        fontFamily:' Montserrat_600SemiBold',
        flex:1,
        paddingHorizontal:10,
        color:'#fff',
        fontSize:11
    }



})
