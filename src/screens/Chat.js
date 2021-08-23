import React from 'react'
import { StyleSheet, Text, View ,Image,Animated,ActivityIndicator} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Entypo from '@expo/vector-icons/Entypo'
import Profiles from '../components/Profiles'
import Message from '../components/Message'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Icon from '@expo/vector-icons/MaterialIcons'
const Chat = (props) => {
 
    const URL=`https://api.github.com/users`;
    const [data,setData,]=useState([]);
    const [loading,setLoading]=useState(true);

    const pan=useRef(new Animated.ValueXY()).current;
    const list=useRef(new Animated.ValueXY()).current;

    useEffect(function(){
      
        const getData=async()=>{
            const resp=await fetch(URL);
            const data=await resp.json();
            setData(data);
            setLoading(false);

        };

        getData();

        Animated.timing(pan,{
            toValue:{x:-400,y:0},
            delay:1000,
            useNativeDriver:false
        }).start();

        Animated.timing(list,{
            toValue:{x:0,y:-300},
            delay:2000,
            useNativeDriver:false
        }).start();
    },[])
     
    console.log(data.login);

    return (
        <LinearGradient style={styles.gradient} colors={['#f26a50','#f20042','#f20045']}>
          <View style={styles.headerContainer}>
          <Text style={styles.header}>chat</Text>
          <Icon name="add" size={30} color="#fff"/>

             </View>

             <ScrollView style={styles.proContainer} horizontal showsHorizontalScrollIndicator={false}  >
             {
                loading ?
                (
                    <ActivityIndicator size="small" color="#fff"/>
                ):(
                    <Animated.View style={[pan.getLayout(),styles.card]}>

                        {
                            data.map((item,index)=>(
                                <Profiles
                                 
                                key={item.id}
                                username={item.login}
                                uri={item.avatar_url}
                         


                                />
                            ))
                        }

                    </Animated.View>
                )


             }
             </ScrollView>
             <View style={styles.ops}>
                 <View style={styles.col}>
                     <Text style={styles.day}>sunday</Text>
                     <Entypo color="#000119" size={30} name="dots-three-horizontal" />
                 </View>
                 <ScrollView showsVerticalScrollIndicator={false}>
                     {
                         loading ?(
                               
                            <ActivityIndicator size='large' color='#f20042'/>
                         ):(
                           <Animated.View style={[list.getLayout(),styles.list]}>
                               {
                            data.map((item,index)=>(
                                <Message
                                 
                                key={item.id}
                                username={item.login}
                                uri={item.avatar_url}
                                count={Math.floor(Math.random()*3)}
                                onPress={()=>{
                                    props.navigation.navigate('Discussion',{
                                        itemId:item.id,
                                        itemName:item.login,
                                        itemPic:item.avatar_url

                                    });
                                }}


                                />
                            ))
                        }
                           </Animated.View>
                         )
                     }
                 </ScrollView>
             </View>


        </LinearGradient>
    )
}

export default Chat

const styles = StyleSheet.create({

    list:{
        marginTop:300,
    },
   card:{
    marginLeft:400,
    width:400,
    flexDirection:'row'
   },
   gradient:{
       height:'100%',
       position:'absolute',
       left:0,
       right:0,
       top:0,
       paddingTop:30,
       paddingHorizontal:20
   },

headerContainer:{
    flexDirection:'row',
    alignItems:'center'
},

header:{
    flex:1,
    color:'#fff',
    fontSize:24,
    fontFamily:'Montserrat_800ExtraBold'
},
proContainer:{
    marginRight:-20,
    alignSelf:'center'
},ops:{
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    height:500,
    backgroundColor:'#fff',
    marginHorizontal:-20
},
col:{
    marginTop:25,
    marginHorizontal:20,
    flexDirection:'row',
    alignItems:'center'
},
day:{
    fontFamily:'Montserrat_800ExtraBold',
    flex:1,
    fontSize:20,
    color:'#000119'
}

})
