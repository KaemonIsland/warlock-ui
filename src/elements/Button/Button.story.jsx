import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean, number } from '@storybook/addon-knobs'
import { Button } from './Button'

const colorOptions = {
  red: 'red',
  redVivid: 'redVivid',
  orange: 'orange',
  orangeVivid: 'orangeVivid',
  yellow: 'yellow',
  yellowVivid: 'yellowVivid',
  lime: 'lime',
  limeVivid: 'limeVivid',
  green: 'green',
  greenVivid: 'greenVivid',
  teal: 'teal',
  tealVivid: 'tealVivid',
  cyan: 'cyan',
  cyanVivid: 'cyanVivid',
  lightBlue: 'lightBlue',
  lightBlueVivid: 'lightBlueVivid',
  blue: 'blue',
  blueVivid: 'blueVivid',
  indigo: 'indigo',
  indigoVivid: 'indigoVivid',
  purple: 'purple',
  purpleVivid: 'purpleVivid',
  magenta: 'magenta',
  magentaVivid: 'magentaVivid',
  pink: 'pink',
  pinkVivid: 'pinkVivid',
  blueGrey: 'blueGrey',
  coolGrey: 'coolGrey',
  grey: 'grey',
  warmGrey: 'warmGrey',
}

storiesOf('Elements', module).add('Button', () => (
  <div style={{ margin: '1rem' }}>
    <Button
      color={select('Color', colorOptions, 'red')}
      shade={number('Shade', 1)}
      isFullwidth={boolean('isFullwidth', false)}
    >
      Click Me!
    </Button>
  </div>
))
