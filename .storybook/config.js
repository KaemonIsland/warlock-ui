import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { addReadme } from 'storybook-readme'
import { withA11y } from '@storybook/addon-a11y'
import { ThemeProvider, GlobalStyles } from '../src/theme'

const ProvideTheme = storyFn => (
  <ThemeProvider>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)
addParameters({
  options: {},
})

addDecorator(ProvideTheme)
addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(addReadme)

function loadStories() {
  const req = require.context('../src', true, /\.story\.js*/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
