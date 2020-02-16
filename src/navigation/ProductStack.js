import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from 'src/screens/Home'
import Product from 'src/screens/Product'

const Stack = createStackNavigator()

const ProductStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Product" component={Product} />
  </Stack.Navigator>
)

export default ProductStack
