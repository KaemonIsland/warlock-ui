import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number } from '@storybook/addon-knobs'
import { formatFontSize } from '../../theme/typography'
import { Text } from './Text'
import textReadme from './Text.md'

const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const sizeOptions = {
  range: true,
  min: 1,
  max: 11,
  step: 1,
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
        size={number('Size', 4, sizeOptions)}
        isBold={boolean('isBold', false)}
        isItalics={boolean('isItalics', false)}
      >
        {text('Content', 'You can edit me!')}
      </Text>
      {sizes.map(size => (
        <>
          <Text size={size}>Size: {formatFontSize(size)}</Text>
        </>
      ))}
    </div>
  ))
