import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Catagory({ item, selected, isSelected }) {
    return (
        <TouchableOpacity onPress={()=> isSelected(item)}>

            <Text style={[styles.Catagory, selected === item && { backgroundColor: 'red' }]}>{item}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    Catagory: {
        padding: 12,
        height: 40,
        backgroundColor: '#8d99ae',
        borderRadius: 14,
        color: '#fff',
        marginHorizontal: 7,
        marginVertical: 15,
    },
})

export default Catagory
