import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { spaceScale } from '../../theme/spacing'
import spacing from './Spacing.md'

const StyledBox = styled.div`
  width: ${({ size }) => spaceScale(size)};
  height: 2rem;
  background-color: rebeccapurple;
  margin-bottom: 1rem;
`
const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

storiesOf('Design System', module)
  .addParameters({
    readme: {
      sidebar: spacing,
    },
  })
  .add('Spacing', () => (
    <div>
      {sizes.map(size => (
        <>
          Size: {spaceScale(size)}
          <StyledBox size={size} />
        </>
      ))}
    </div>
  ))
