import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean, number } from '@storybook/addon-knobs'
import { Button } from './Button'
import { colorList } from '../../utils'
import readme from './Button.md'

const roundedOptions = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  full: 'full',
  none: 'none',
}

storiesOf('Elements', module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('Button', () => (
    <div style={{ margin: '1rem' }}>
      <Button
        rounded={select('Rounded', roundedOptions, 'small')}
        color={select('Color', colorList, 'red')}
        shade={number('Shade', 1)}
        isFullwidth={boolean('isFullwidth', false)}
      >
        Click Me!
      </Button>
    </div>
  ))
