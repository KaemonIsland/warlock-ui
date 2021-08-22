import renderer from 'react-test-renderer'
import React from 'react'
import { Modal } from '..'
import { ThemeProvider } from '../..../'

// prettier-ignore
test('The Modal renders', () => {
  const tree = renderer
    .create(
      <ThemeProvider>
        <Modal />
      </ThemeProvider>,
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
