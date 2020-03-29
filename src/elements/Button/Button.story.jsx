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

const variantOptions = {
  default: 'default',
  outline: 'outline',
  text: 'text',
}

const sizeOptions = {
  small: 'small',
  medium: 'medium',
  large: 'large',
}
const shadeOptions = {
  range: true,
  min: 1,
  max: 10,
  step: 1,
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
        bubble={boolean('Bubble', true)}
        hover={boolean('Hover', false)}
        isDisabled={boolean('Disabled', false)}
        variant={select('Style', variantOptions, 'default')}
        size={select('Size', sizeOptions, 'medium')}
        rounded={select('Rounded', roundedOptions, 'small')}
        color={select('Color', colorList, 'red')}
        shade={number('Shade', 1, shadeOptions)}
        isFullwidth={boolean('isFullwidth', false)}
      >
        Click Me!
      </Button>
    </div>
  ))
