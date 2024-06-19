


import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../components/header'
import Feather from 'react-native-vector-icons/dist/Feather';
import Catagory from '../components/catagory';
import Products from '../components/Products';
import data from '../data/data.json';

function Homescreen() {
const catagories = ['TRENDING' ,'ALL', 'NEW','MENS','WOMENS' ]
const [products , setproducts]= useState(data.itemlist)
const [selected , isSelected] = useState()
const [clicked , setclicked] = useState()


return (
<View style={styles.container}>
  <Header/>
    <FlatList 
       data={products}
       keyExtractor={(item)=>item.id}
       renderItem={({item})=><Products item={item}/>}
       numColumns={2}
       contentContainerStyle={{
        paddingBottom:50
       }}
       showsVerticalScrollIndicator={false}
       ListHeaderComponent={
        <>
            <Text style={styles.txt1}>
             Match Your Style
            </Text>
            <View style={styles.ipt}>
              <Feather name={'search'} color={'#9a8c98'} size={26} style={styles.imgg}/>
              <TextInput placeholder='Search' style={styles.iptfield}/>
            </View>
     
            <FlatList
            data={catagories}
            keyExtractor={(item)=>item}
            renderItem={({item})=><Catagory item={item} selected={selected} isSelected={isSelected}/>}
             horizontal={true}
         showsHorizontalScrollIndicator={false}
            />
        </>

       }
       />
    </View>
  )
}

export default Homescreen
const styles  = StyleSheet.create({
    container:{
       
        backgroundColor:'#ffddd2',
       paddingHorizontal:15,
        
      
    },
    txt1:{
     fontSize:28,
     color:'#000',
     marginVertical:20,
    },
    ipt:{
      height:40,
      backgroundColor:'white',
      borderRadius:10,
      flexDirection:'row',
      alignItems:'center',
    },
    imgg:{
      marginHorizontal:10,
    },
    iptfield:{
      
    },
    products:{
      flexDirection:'row',
       
    },
})