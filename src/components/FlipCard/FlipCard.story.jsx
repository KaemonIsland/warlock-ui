import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { FlipCard } from './FlipCard'
import FlipReadMe from './FlipCard.md'

const flipOptions = {
  horizontal: 'horizontal',
  vertical: 'vertical',
}

storiesOf('Components', module)
  .addParameters({
    readme: {
      sidebar: FlipReadMe,
    },
  })
  .add('FlipCard', () => (
    <div
      style={{
        height: '10rem',
        width: '10rem',
        margin: '1rem 0 0 1rem',
      }}
    >
      <FlipCard flipDirection={select('Flip Direction', flipOptions, 'horizontal')}>
        <FlipCard.Front backgroundColor="lightblue">Click me to flip!</FlipCard.Front>
        <FlipCard.Back backgroundColor="lightgreen">
          <p>Wow there is a full other side here!</p>
        </FlipCard.Back>
      </FlipCard>
    </div>
  ))
