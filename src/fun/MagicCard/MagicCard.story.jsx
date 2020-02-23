import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { MagicCard } from './MagicCard'

const colorCombos = {
  White: 'white',
  Blue: 'blue',
  Black: 'black',
  Red: 'red',
  Multi: 'multi',
  Artifact: 'artifact',
  'Blue-Black': 'blue-black',
  'Black-Green': 'black-green',
  'Blue-Red': 'blue-red',
  'White-Black': 'white-black',
  'Black-Red': 'black-red',
  'Green-White': 'green-white',
  'Green-Blue': 'green-blue',
  'White-Blue': 'white-blue',
  'Red-White': 'red-white',
  'Red-Green': 'red-green',
}

storiesOf('Fun', module).add('MagicCard', () => (
  <>
    <MagicCard color={select('Card Color', colorCombos, 'white')} />
  </>
))
