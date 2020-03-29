import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, select } from '@storybook/addon-knobs'
import { fontScale } from '../../theme/typography'
import { Text } from './Text'
import textReadme from './Text.md'
import { colorList } from '../../utils'

const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const sizeOptions = {
  range: true,
  min: 1,
  max: 11,
  step: 1,
}

const shadeOptions = {
  range: true,
  min: 1,
  max: 10,
  step: 1,
}

const weightOptions = {
  range: true,
  min: 100,
  max: 900,
  step: 100,
}

storiesOf('Typography', module)
  .addParameters({
    readme: {
      sidebar: textReadme,
    },
  })
  .add('Text', () => (
    <div>
      <Text
        family={text('Font Family', '')}
        weight={number('Weight', 400, weightOptions)}
        lineHeight={number('Line Height', 1)}
        spacing={number('Letter Spacing', 1)}
        size={number('Size', 4, sizeOptions)}
        isBold={boolean('isBold', false)}
        isItalics={boolean('isItalics', false)}
        color={select('Color', { black: 'black', ...colorList }, 'black')}
        shade={number('Shade', 10, shadeOptions)}
      >
        {' '}
        {text('Content', 'You can edit me!')}{' '}
      </Text>{' '}
      {sizes.map(size => (
        <>
          <Text size={size}> Size: {fontScale(size)} </Text>{' '}
        </>
      ))}{' '}
    </div>
  ))
