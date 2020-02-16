import React from 'react'
import t from 'prop-types'

import { Space } from './styles'

const Separator = ({ size, type }) => {
  const { height, width } = {
    horizontal: { height: '1px', width: size },
    vertical: { height: size, width: '1px' }
  }[type]

  return <Space wHeight={height} wWidth={width} />
}

Separator.propTypes = {
  size: t.string.isRequired,
  type: t.oneOf(['horizontal', 'vertical'])
}

Separator.defaultProps = {
  type: 'vertical'
}

export default Separator
