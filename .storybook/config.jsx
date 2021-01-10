import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { addReadme } from 'storybook-readme'
import { withA11y } from '@storybook/addon-a11y'
import { ThemeProvider, GlobalStyles } from '../src/theme'

const loadFonts = stylesheet => {
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', stylesheet)

  document.getElementsByTagName('head')[0].appendChild(link)
}
// Roboto font
loadFonts(
  'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap'
)

// Source Sans Pro
loadFonts(
  'https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i&display=swap'
)

// Open Sans
loadFonts(
  'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap'
)

// Merriweather
loadFonts(
  'https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i&display=swap'
)

// Inter
loadFonts(
  'https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900&display=swap'
)

// Lato
loadFonts(
  'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap'
)

// Quicksand
loadFonts(
  'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
)

const ProvideTheme = storyFn => (
  <ThemeProvider>
    <GlobalStyles /> {storyFn()}{' '}
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
