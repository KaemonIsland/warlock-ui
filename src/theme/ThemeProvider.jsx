import React from 'react'
import { ThemeProvider as MainThemeProvider } from 'styled-components'
import { theme } from './theme'

export const ThemeProvider = ({ ...rest }) => (
  <MainThemeProvider theme={theme} {...rest} />
)
