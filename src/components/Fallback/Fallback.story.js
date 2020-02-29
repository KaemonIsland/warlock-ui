import React from 'react'
import { storiesOf } from '@storybook/react'
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
      message="You might be lost!"
      imageAlt="Some beach"
    >
      I&apos;m here for additional actions.
      <button>Click me to go back and view other stuff!</button>
    </Fallback>
  ))
