import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'

const randomTime=()=>{
    const hrs=Math.round(Math.random()*12);
    const mins=Math.round(Math.random()*60);
    const hFormat=hrs <10 ? '0':'';
    const mFormat=mins <10 ? '0':'';
    const amPm=hrs <10 ? 'AM':'PM';
    return String(hFormat+hrs+':'+mFormat+mins+''+amPm);
}





const Message = ({username,uri,onPress,count}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {
               count > 0 ?(
                   <LinearGradient style={styles.styleGradient} colors={['#f26a50','#f20045','#f20045']}>
                     <Text style={styles.count}>{count}</Text>
                   </LinearGradient>
               ):null}

               <Image source={{uri:uri}} style={styles.image} />
               <View style={{marginLeft:10}}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.text}>Hello </Text>
               </View>
            <Text style={styles.duration}>{randomTime()}</Text>
        </TouchableOpacity>
    )
}

export default Message

const styles = StyleSheet.create({

container:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:30,
    paddingHorizontal:20
},

styleGradient:{
    height:20,
    width:29,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginRight:20

},
count:{

    color:'#fff',
    fontFamily:'Montserrat_700Bold',
    

},
image:{
    height:60,
    width:60,
    borderRadius:30

},
text:{
    fontSize:11,
    color:'#b6b6b6',
    fontFamily:'Montserrat_600SemiBold',
},

duration:{
    fontSize:12,
    flex:1,
    position:'absolute',
    color:'#000119',
    marginLeft:280,
    fontFamily:'Montserrat_600SemiBold'

},
username:{

    color:"#000119",
    fontFamily:"Montserrat_700Bold"


}



})
