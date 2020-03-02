import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container } from './Container'
import containerReadMe from './Container.md'

storiesOf('Layout', module)
  .addParameters({
    readme: {
      sidebar: containerReadMe,
    },
  })
  .add('Container', () => (
    <Container>
      I&apos;m here for additional actions.
      <button>Click me to go back and view other stuff!</button>
    </Container>
  ))
