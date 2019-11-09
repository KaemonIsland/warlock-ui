import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { FlipCard, CardSide } from '.'

const flipOptions = {
  horizontal: 'horizontal',
  vertical: 'vertical',
}

storiesOf('Components', module).add('FlipCard', () => (
  <div
    style={{
      height: '10rem',
      width: '10rem',
    }}
  >
    <FlipCard
      flipDirection={select('Flip Direction', flipOptions, 'horizontal')}
    >
      <CardSide side="front" backgroundColor="lightblue">
        Front
      </CardSide>
      <CardSide side="back" backgroundColor="lightgreen">
        Back
      </CardSide>
    </FlipCard>
  </div>
))
