import React from 'react'
import { View } from 'react-native'
import t from 'prop-types'

import Button from 'src/components/Button'
import ScreenWrapper from 'src/components/ScreenWrapper'
import Separator from 'src/components/Separator'
import StandardTextWrapper from 'src/components/StandardTextWrapper'

const Product = ({ navigation }) => (
  <ScreenWrapper>
    <StandardTextWrapper>Product screen{'\n'}🥛🧀🍔</StandardTextWrapper>
    <Separator size="20px" />

    <View>
      <Button onPress={() => navigation.navigate('Info')} title="Open modal 🐞" type="primary" />
      <Separator size="10px" />
      <Button onPress={() => navigation.popToTop()} title="Back to home screen" type="secondary" />
    </View>
  </ScreenWrapper>
)

Product.propTypes = {
  navigation: t.object.isRequired
}

export default Product
