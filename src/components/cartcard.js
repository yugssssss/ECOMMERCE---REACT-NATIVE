


import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Cartcard({item}) {
  return (
   <View style={styles.container}>

        <View style={styles.imgcon}>
        <Image style={styles.img} source={{uri:item.image}}/>

        </View>
        <View style={styles.CONTENT_CON}>
           <Text style={styles.txt_name}>{item.title}</Text>
           <Text style={styles.txt_price}> ${item.price}</Text>
           <View style={styles.options}>

           
           <View style={[styles.color , {backgroundColor:item.color}]}></View>
           <View style={styles.lenghcon} >
           <Text style={styles.len}>{item.size}</Text>
           </View>
           </View>
        </View>

   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
       marginVertical:20,
    },
    imgcon:{},
    img:{
        height:180,
        width:100,
        borderRadius:15,

    },
    CONTENT_CON:{
      gap:10,
      marginLeft:20,
    }, 
    txt_name:{
      fontSize:25,
      color:'gray',
      fontWeight:"400",
    },
    txt_price:{
      fontSize:20,

    },
    color:{
      height:35,
      width:35,
      borderRadius:17,
      backgroundColor:'blue',
    },
    lenghcon:{
      height:35,
      width:35,
      borderRadius:17,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
    },
    options:{
       flexDirection:'row',
       gap:10,
    },
    len:{
      fontSize:20,
      color:'black',
    },
})

export default Cartcard
