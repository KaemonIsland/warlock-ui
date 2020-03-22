import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean, number } from '@storybook/addon-knobs'
import { Button } from './Button'
import { colorList } from '../../utils'

storiesOf('Elements', module).add('Button', () => (
  <div style={{ margin: '1rem' }}>
    <Button
      color={select('Color', colorList, 'red')}
      shade={number('Shade', 1)}
      isFullwidth={boolean('isFullwidth', false)}
    >
      Click Me!
    </Button>
  </div>
))
