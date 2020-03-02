import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex } from './Flex'
import flexReadMe from './Flex.md'

storiesOf('Layout', module)
  .addParameters({
    readme: {
      sidebar: flexReadMe,
    },
  })
  .add('Flex', () => (
    <Flex direction="column">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </Flex>
  ))
