// Link.react.test.js
import renderer from 'react-test-renderer'
import React from 'react'
import { Button } from '.'

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Button />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props.onMouseEnter()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props.onMouseLeave()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
