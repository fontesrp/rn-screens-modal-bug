import React from 'react'
import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Info from 'src/screens/Info'

import ProductStack from './ProductStack'

enableScreens()

const Stack = createStackNavigator()

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName="ProductStack" mode="modal">
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="ProductStack" component={ProductStack} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Navigation
