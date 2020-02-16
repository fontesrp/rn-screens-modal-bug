import React from 'react'
import { View } from 'react-native'
import t from 'prop-types'

import Button from 'src/components/Button'
import ScreenWrapper from 'src/components/ScreenWrapper'
import Separator from 'src/components/Separator'
import StandardTextWrapper from 'src/components/StandardTextWrapper'

const Home = ({ navigation }) => (
  <ScreenWrapper>
    <StandardTextWrapper>Home{'\n'}🏠</StandardTextWrapper>
    <Separator size="20px" />

    <View>
      <Button onPress={() => navigation.navigate('Info')} title="Open modal 🐞" type="primary" />
      <Separator size="10px" />
      <Button
        onPress={() => navigation.push('Product')}
        title="Push another screen"
        type="secondary"
      />
    </View>
  </ScreenWrapper>
)

Home.propTypes = {
  navigation: t.object.isRequired
}

export default Home
