import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { Button } from '../../elements'
import { Fallback } from './Fallback'
import fallbackReadMe from './Fallback.md'

storiesOf('Components', module)
  .addParameters({
    readme: {
      sidebar: fallbackReadMe,
    },
  })
  .add('Fallback', () => (
    <Fallback
      image="https://media.istockphoto.com/vectors/summer-background-beautiful-tropical-seashore-full-of-the-sunlight-vector-id1207447728"
      imageAlt="Some beach"
      imageSize={select('imageSize', ['xLarge', 'large', 'medium', 'small'], 'medium')}
      message="You might be lost!"
    >
      I&apos;m here for additional actions.
      <Button>Click me to go back and view other stuff!</Button>
    </Fallback>
  ))
