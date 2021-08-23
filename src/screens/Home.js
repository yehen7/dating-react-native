import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Home = () => {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}> 
           <Image source={{uri:"https://static.vecteezy.com/system/resources/previews/001/957/762/non_2x/happy-valentine-day-background-free-vector.jpg"}} style={{width: '99%', height: '100%'}}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
