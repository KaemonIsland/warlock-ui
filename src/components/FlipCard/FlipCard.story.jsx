import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { FlipCard, CardSide } from './FlipCard'
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
      <FlipCard
        flipDirection={select('Flip Direction', flipOptions, 'horizontal')}
      >
        <CardSide side="front" backgroundColor="lightblue">
          Click me to flip!
        </CardSide>
        <CardSide side="back" backgroundColor="lightgreen">
          Wow there is a full other side here!
        </CardSide>
      </FlipCard>
    </div>
  ))
