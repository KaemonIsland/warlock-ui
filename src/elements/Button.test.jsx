import renderer from 'react-test-renderer'
import React from 'react'
import { Button, ThemeProvider } from '..'

// prettier-ignore
test('The Button works!', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Button title="Click me" callback={() => {}} />
      </ThemeProvider>,
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
