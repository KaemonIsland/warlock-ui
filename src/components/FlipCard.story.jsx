import React from 'react'
import { storiesOf } from '@storybook/react'
// import { text, select, boolean } from '@storybook/addon-knobs'
import { FlipCard, CardSide } from '.'

storiesOf('Components', module).add('ContentFlipper', () => (
  <div
    style={{
      height: '10rem',
      width: '10rem',
    }}
  >
    <FlipCard>
      <CardSide side="front" backgroundColor="lightblue">
        Front
      </CardSide>
      <CardSide side="back" backgroundColor="lightgreen">
        Back
      </CardSide>
    </FlipCard>
  </div>
))
