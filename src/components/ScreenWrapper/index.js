import styled from 'styled-components'
import t from 'prop-types'

const ScreenWrapper = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.screenBgColor};
  flex: 1;
  justify-content: center;
  padding: 10px;
  width: 100%;
`

ScreenWrapper.propTypes = {
  theme: t.object
}

ScreenWrapper.defaultProps = {
  theme: {
    screenBgColor: null
  }
}

export default ScreenWrapper
