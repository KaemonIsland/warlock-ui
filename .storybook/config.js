import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from '../src/theme'

function loadStories() {
  const req = require.context('../src', true, /\.story\.js*/)
  req.keys().forEach(filename => req(filename))
}

const ProvideTheme = storyFn => (
  <ThemeProvider>
    {storyFn()}
  </ThemeProvider>
)

addDecorator(ProvideTheme)

configure(loadStories, module)
