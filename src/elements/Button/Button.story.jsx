import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean, number } from '@storybook/addon-knobs'
import { Button } from './Button'
import { colorList } from '../../utils'
import { Grid } from '../../layout'
import readme from './Button.md'

const roundedOptions = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  full: 'full',
  none: 'none',
}

const variantOptions = {
  filled: 'filled',
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
        variant={select('Variant', variantOptions, 'filled')}
        size={select('Size', sizeOptions, 'medium')}
        rounded={select('Rounded', roundedOptions, 'small')}
        color={select('Color', colorList, 'magenta')}
        shade={number('Shade', 4, shadeOptions)}
        isFullwidth={boolean('isFullwidth', false)}
      >
        Click Me
      </Button>
      <Grid
        justifyItems="center"
        alignContent="center"
        templateAreas={['small', 'medium', 'large']}
        templateColumns={Grid.repeat(3, Grid.fr(1))}
        templateRows={Grid.repeat(4, Grid.fr(1))}
      >
        <Grid.Item>
          <Button shade={3} color="red">
            Small
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button shade={3} size="medium" color="red">
            Medium
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button shade={3} size="large" color="red">
            Large
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button hover variant="outline" color="green">
            Small
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button hover variant="outline" size="medium" color="green">
            Medium
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button hover variant="outline" size="large" color="green">
            Large
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button hover bubble={false} variant="text" color="blue">
            Small
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button
            hover
            bubble={false}
            variant="text"
            size="medium"
            color="blue"
          >
            Medium
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button hover bubble={false} variant="text" size="large" color="blue">
            Large
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button isDisabled hover bubble={false} variant="text" color="blue">
            Small
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button
            isDisabled
            hover
            bubble={false}
            variant="text"
            size="medium"
            color="blue"
          >
            Medium
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button
            isDisabled
            hover
            bubble={false}
            variant="text"
            size="large"
            color="blue"
          >
            Large
          </Button>
        </Grid.Item>
      </Grid>
    </div>
  ))
