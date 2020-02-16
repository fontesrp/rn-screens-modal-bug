import React from 'react'
import { ThemeProvider } from 'styled-components'

import Navigation from 'src/navigation'
import theme from 'src/resources/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Navigation />
  </ThemeProvider>
)

export default App
