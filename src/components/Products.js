

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

function Products({item}) {
    
const navigation = useNavigation()

const[isliked , setisliked]= useState(false)
return (
    <TouchableOpacity style={styles.container}
    onPress={()=>{navigation.navigate('PRODUCT_DETAILS',{item})}} >
            <Image style={{width:167,height:240 , borderRadius:10}} source={{ uri: item.image}} />
            <View style={styles.content}>
                <Text style={styles.txt1}>{item.title}</Text>
                <Text style={styles.txt2}>
                    ${item.price}
                </Text>

            </View>
            <TouchableOpacity onPress={()=>setisliked(!isliked)} style={styles.likecon}>
                {
                 isliked?
                 <AntDesign name={"heart"} size={25} style={styles.like} color={'red'}/>
                 :
                 <AntDesign name={"hearto"} size={25} style={styles.like} color={'red'}/>

                }

            </TouchableOpacity>
            

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical:12,
        position:'relative',
    },

    imgmodel: {
        width: 100,
        hieght: 200,
    },
    txt1:{
        fontSize:18,
        fontWeight:'600',
        color:'black',
    },
    txt2:{
        fontSize:16,
        fontWeight:'500',
        color:'gray',
    },
    content:{
        marginVertical:6,
    },
    like:{
        
    },
    likecon:{
        position:'absolute',
        top:7,
        right:  24,

    },
})

export default Products
