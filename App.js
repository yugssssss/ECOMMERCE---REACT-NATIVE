/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */



import React, { useContext } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './src/screens/Homescreen';

import Entypo from 'react-native-vector-icons/dist/Entypo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product_details from './src/screens/product_details';
import Cartscreen from './src/screens/cartscreen';
import { cartcontext, CartProvider } from './src/context/cartcontext';


const tab = createBottomTabNavigator()

const stack = createNativeStackNavigator()
const HOME_STACK = () => {
  return (
    <stack.Navigator screenOptions={{
      headerShown: false,

    }}>
      <stack.Screen name='HOME' component={Homescreen} />
      <stack.Screen name='PRODUCT_DETAILS' component={Product_details} />
    </stack.Navigator>
  )
}


function App() {
  return (

    <NavigationContainer>
      <CartProvider>
        <tab.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'red'

        }}>
          <tab.Screen name='HOME_STACK' component={HOME_STACK} options={{
            tabBarIcon: ({ color, focused, size }) => {
              return <Entypo name={"home"} size={size} color={color} />
            }
          }} />
          <tab.Screen name='REORDER' component={Homescreen} options={{
            tabBarIcon: ({ color, focused, size }) => {
              return <Entypo name={"menu"} size={size} color={color} />
            }
          }} />
          <tab.Screen name='CART' component={Cartscreen} options={{
            tabBarIcon: ({ color, focused, size }) => {
              const { cart } = useContext(cartcontext)
              return (
                <View style={{
                  position: 'relative'
                }}>
                  <Entypo name={"shopping-cart"} size={size} color={color} />
                  <View style={{
                    height: 20,
                    width: 20,
                    backgroundColor: 'red',
                    borderRadius: 10,
                    position: 'absolute',
                    top: -10,
                    right: -10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Text style={{
                      color: 'white',

                    }}>{cart.length}</Text>
                  </View>
                </View>


              )
            }
          }} />
          <tab.Screen name='ACCOUNT' component={Homescreen} options={{
            tabBarIcon: ({ color, focused, size }) => {
              return <Entypo name={"user"} size={size} color={color} />
            }
          }} />
        </tab.Navigator>
      </CartProvider>
    </NavigationContainer>

  )
}

export default App
