import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { formatSize } from '../../theme/spacing'
import Sizing from './Sizing.md'

const StyledBox = styled.div`
  width: ${({ size }) => formatSize(size)};
  height: 2rem;
  background-color: rebeccapurple;
  margin-bottom: 1rem;
`
const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

storiesOf('Layout', module)
  .addParameters({
    readme: {
      sidebar: Sizing,
    },
  })
  .add('Sizing', () => (
    <div>
      {sizes.map(size => (
        <>
          Size: {formatSize(size)}
          <StyledBox size={size} />
        </>
      ))}
    </div>
  ))
