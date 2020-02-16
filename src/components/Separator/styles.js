import styled from 'styled-components'
import t from 'prop-types'

const Space = styled.View`
  ${({ wHeight }) => wHeight && `height: ${wHeight}`};
  ${({ wWidth }) => wWidth && `width: ${wWidth}`};
`

Space.propTypes = {
  wHeight: t.string.isRequired,
  wWidth: t.string.isRequired
}

export { Space }
