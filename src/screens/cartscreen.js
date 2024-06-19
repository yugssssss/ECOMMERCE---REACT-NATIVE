

import React, { useContext } from 'react'
import Cartcard from '../components/cartcard'
import Header from '../components/header'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { cartcontext } from '../context/cartcontext'

function Cartscreen() {
let price=0;
  const {cart} = useContext(cartcontext)
{
  cart.map((item)=>(
    price += item.price
  )) 
}



  return (
    <>
    <View style={styles.container}>

    <Header incart={true}/>
    <View style={styles.cart_product}>

   <FlatList
   data={cart}
   keyExtractor={(item)=>item}
   renderItem={({item})=> <Cartcard item={item}/>}
   showsVerticalScrollIndicator={false}
   contentContainerStyle={{
    paddingBottom:100,
   }}
   ListFooterComponent={
    <>
    <View style={styles.pricing} >

    <View style={styles.total}>
  <Text style={styles.txt}>Total</Text>
  <Text style={styles.txt}>${+price}</Text>
</View>
<View style={styles.shipping}>
  <Text style={styles.txt}>Shipping</Text>
  <Text style={styles.txt}>$0.0</Text>
</View>
<View style={styles.line}></View>
<View style={styles.grand}>
  <Text style={styles.txt}>Grand-total</Text>
  <Text style={[styles.txt , {fontWeight:'900'}]}>${price}</Text>
</View>
<View style={styles.btn_con}>
  
<TouchableOpacity style={styles.btn}>
  <Text style={styles.txt2}>
    Checkout
  </Text>
</TouchableOpacity>
</View>
    </View>

    </>
   }
   />




    </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        backgroundColor:'#ffddd2',
    },
    cart_product:{
        marginVertical:40,
    },
    total:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    shipping:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    grand:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    
    txt:{
      color:'black',
      fontSize:16
,
    },
    line:{
      borderTopColor:'gray',
      borderTopWidth:2,
    },
    btn_con:{
      justifyContent:'center',
      alignItems:'center',
     marginTop:20,
    },
    btn:{
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:12,
      height:60,
      width:250,
    },
    txt2:{
      color:'white',
      fontSize:20,
    },
    pricing:{
      gap:20,
    },
})

export default Cartscreen
