

import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

function  Header({incart}) {

 const navigation = useNavigation()

  return (
    <View style={style.container}>
        <TouchableOpacity onPress={()=> navigation.navigate('HOME_STACK')} style={style.img1con} >
        {
            incart 
            ?
            <Ionicons name={'chevron-back'} size={26} color={'gray'}/>
            :

        <Image style={style.img} source={{uri:'https://imgs.search.brave.com/_h02mJglZemh7qaKtuFnTxMHxY-VvzpDmoNYKTLawNo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1dvcmRQ/cmVzcy1Mb2dvLUZy/ZWUtRG93bmxvYWQt/UE5HLnBuZw'}}/>
        }
        </TouchableOpacity>

        {
            incart?
            <Text style={style.txt}>My Cart</Text>
            :null
        }
        <Image style={style.img2} source={{uri:'https://imgs.search.brave.com/NnTmEZ62-I6IWkI8HqbCwkv0PODp-xlW_MuUTWCtSfs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZGVtby9pbWFn/ZS91cGxvYWQvcl81/MC9mcm9udF9mYWNl/LnBuZw'}}/>
         
    </View>
  )
}

export default Header
const style = StyleSheet.create({
container:{
    height:40,
    flexDirection:'row',
    justifyContent:'space-between',
   
    paddingHorizontal:15,
    marginTop:20,
},
img:{
    width:40,
    height:40,
},
img1con:{
    height:50,
    width:50,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
},
img2:{
    width:50,
    height:50,
    borderRadius:30,
},
txt:{
    fontSize:28,
    color:'gray',
    fontWeight:'600',
},

})