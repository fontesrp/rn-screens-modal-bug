import styled from 'styled-components'
import t from 'prop-types'

const Button = styled.Button.attrs(({ theme, type }) => ({
  color: theme[type]
}))``

Button.propTypes = {
  theme: t.object,
  type: t.oneOf(['primary', 'secondary']).isRequired
}

Button.defaultProps = {
  theme: {
    primary: null,
    secondary: null
  }
}

export default Button
