import renderer from 'react-test-renderer'
import React from 'react'
import { FlipCard, CardSide } from '.'
import { ThemeProvider } from '..'

// prettier-ignore
test('The FlipCard works!', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <FlipCard>
          <CardSide side="front">Front</CardSide>
          <CardSide side="back">Back</CardSide>
        </FlipCard>
      </ThemeProvider>,
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
