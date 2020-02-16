import React from 'react'
import t from 'prop-types'

import Button from 'src/components/Button'
import ScreenWrapper from 'src/components/ScreenWrapper'
import Separator from 'src/components/Separator'
import StandardTextWrapper from 'src/components/StandardTextWrapper'

const Info = ({ navigation }) => (
  <ScreenWrapper>
    <StandardTextWrapper>
      When you close this modal on Android, the app will crash
    </StandardTextWrapper>
    <Separator size="16px" />

    <Button onPress={() => navigation.goBack()} title="⚠️ 🐞 Close modal 🐞 ⚠️" type="primary" />
  </ScreenWrapper>
)

Info.propTypes = {
  navigation: t.object.isRequired
}

export default Info
