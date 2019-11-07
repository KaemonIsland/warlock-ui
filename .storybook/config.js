import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider, GlobalStyles } from '../src/theme'

function loadStories() {
  const req = require.context('../src', true, /\.story\.js*/)
  req.keys().forEach(filename => req(filename))
}

const ProvideTheme = storyFn => (
  <ThemeProvider>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)

addDecorator(ProvideTheme)

configure(loadStories, module)
