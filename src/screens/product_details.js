

import React, { useContext, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { cartcontext } from '../context/cartcontext'


const Product_details = () => {

  const navigation = useNavigation()

  const { addtocart } = useContext(cartcontext)
  const route = useRoute()
  const item = route.params.item
  const sizes = ['S', 'M', 'L', 'XL']
  const [isSelected, setisSelected] = useState(null)
  const [isSelectedcolor, setisSelectedcolor] = useState(null)
  const handleaddtocart = (item) => {
    item.size = isSelected
    item.color = isSelectedcolor

    addtocart(item)
    navigation.navigate('CART')
  }

  const colors = [
    '#3f37c9',
    '#ef476f',
    '#ffd60a',
    '#ffafcc',
    '#c1121f',

  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />

        <Image style={styles.img} source={{ uri: item.image }} />
        <View style={styles.content} >
          <Text style={styles.txt} >{item.title}</Text>
          <Text style={styles.txt}>${item.price}</Text>
        </View>
        <View style={styles.size}>
          <Text style={styles.txt}>Size</Text>
          <View style={styles.size_con}>

            {
              sizes.map((item) => (

                <TouchableOpacity onPress={() => setisSelected(item)} style={styles.size_option}>

                  <Text style={[styles.txt2, isSelected === item && { color: 'red' }]}>
                    {item}
                  </Text>

                </TouchableOpacity>

              ))
            }
          </View>


        </View>
        <View style={styles.color}>
          <Text style={styles.txt}>Colors</Text>
          <View style={styles.color_con}>
            {
              colors.map((item) => {
                return (
                  <View style={isSelectedcolor === item && {
                    borderWidth: 2,
                    borderColor: item,
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <TouchableOpacity onPress={() => setisSelectedcolor(item)} style={[styles.color_option, { backgroundColor: item }]}>

                    </TouchableOpacity>
                  </View>
                )
              })
            }
          </View>
        </View>
        <View style={styles.btn_con}>

          <TouchableOpacity style={styles.btn} onPress={() => handleaddtocart(item)}>
            <Text style={styles.txt3} onPress={() => handleaddtocart(item)}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffddd2',
    paddingVertical: 15,
    gap: 15,
  },
  img: {
    height: 450,


  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 15,
  },
  size_option: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt2: {
    color: 'black',
  },
  size_con: {
    flexDirection: 'row',
    gap: 8,
    margin: 10,
  },
  color_con: {
    flexDirection: 'row',
    gap: 30,
    margin: 10,
  },
  color_option: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  btn_con: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 50,
    padding: 15,
    borderRadius: 14,
    backgroundColor: 'red',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt3: {
    color: 'white',
    fontSize: 16,
  },
})

export default Product_details
