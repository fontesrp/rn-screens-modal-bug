import styled from 'styled-components'
import t from 'prop-types'

const StandardTextWrapper = styled.Text`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.textFontSize};
  text-align: center;
`

StandardTextWrapper.propTypes = {
  theme: t.object
}

StandardTextWrapper.defaultProps = {
  theme: {
    textColor: null,
    textFontSize: null
  }
}

export default StandardTextWrapper
