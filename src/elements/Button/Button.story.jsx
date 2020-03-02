import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'
import { Button } from './Button'

const shadowColorOpt = {
  primary: 'primary',
  gray: 'gray',
}

storiesOf('Elements', module).add('Button', () => (
  <div style={{ margin: '1rem' }}>
    <Button
      title={text('Title', 'Click Me')}
      shadowColor={select('Shadow Color', shadowColorOpt, 'primary')}
      isFullwidth={boolean('isFullwidth', false)}
    >
      Click Me!
    </Button>
  </div>
))
