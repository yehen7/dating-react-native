import React, { useState } from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Sent from '../components/Sent'
import Data from '../dummy/Data.json'
import Icon from '@expo/vector-icons/AntDesign'
import Input from '../components/Input'
import LastWatch from '../components/LastWatch'
import Recived from '../components/Recived'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const Discussion = ({route,navigation}) => {

    const {itemName,itemPic}= route.params;
    const [inputMessage,setMessage]=useState('');
  

    const send=()=>{
   
        Data.push({id:inputMessage,message:inputMessage});
        setMessage('');
    }

    var txt=[]
    for(var i=5;i<Data.length;i++){
        txt.push(<Sent key={Data[i].Data} message={Data[i].message}   />);
    }



    return (
       <LinearGradient style={styles.container } colors={['#f26a50','#f26a50','#f20045']}>
           <View style={styles.main}>
           <View style={styles.headerContainer}>
               <TouchableOpacity onPress={()=>navigation.goBack()} >
 
            <Icon name='left' color='#000119' size={24} />
        </TouchableOpacity>
        <Text style={styles.username}>{itemName}</Text>
        <Image sorce={{uri:itemPic}} style={styles.avatar} />

           </View>
           <ScrollView showsVerticalScrollIndicator={false}>
               <LastWatch checkedOn="Yesterday"/>
               <Recived image={itemPic} message={Data[0].message}/>
               <Sent image={itemPic} message={Data[0].message}   />
             
               <Recived image={itemPic} message={Data[1].message}/>
               <Sent image={itemPic} message={Data[1].message}   />

               <Recived image={itemPic} message={Data[2].message}/>
               <Sent image={itemPic} message={Data[2].message}   />
               <LastWatch checkedOn="Today"/>
               <View>
                   {txt}
               </View>
           </ScrollView>



           </View>
 <Input

 inputMessage={inputMessage}
 setMessage={(inputMessage)=>setMessage(inputMessage)}
 onSendPress={send}
 
 
 />

       </LinearGradient>
    )
}

export default Discussion

const styles = StyleSheet.create({

    container:{

        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:'100%'
    },
    main:{
        backgroundColor:"#fff",
        height:"88%",
        paddingHorizontal:20,
        paddingTop:40,
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35
    },
    headerContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    username:{
        color:"#000119",
        fontSize:20,
        flex:1,
        textAlign:"center",
        fontFamily:'Montserrat_700Bold'
    },
    avatar:{
        width:40,
        height:40,
        borderRadius:20
    }


})
