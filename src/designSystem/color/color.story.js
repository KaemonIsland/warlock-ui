import React from 'react'
import styled from 'styled-components'
import { Text } from '../../typography'
import { Divider } from '../../elements/Divider'
import { storiesOf } from '@storybook/react'
import { color as colorPalette } from '../../theme/color'
// import fallbackReadMe from './Fallback.md'

const colors = Object.keys(colorPalette)

const ColorSwatch = styled.div(({ theme, color, variant }) => ({
  background: theme.color[color][variant],
  width: theme.formatSpace(10),
  height: theme.formatSpace(8),
  borderRadius: theme.formatSpace(2),
  color: theme.getTextContrast(theme.color[color][variant]),
}))

const ColorVariant = styled.p`
  font-size: ${({ theme }) => theme.formatFontSize(1)};
  text-align: center;
  font-weight: bold;
`

const SwatchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`

storiesOf('Design System', module)
  // .addParameters({
  //   readme: {
  //     sidebar: fallbackReadMe,
  //   },
  // })
  .add('Color', () => (
    <>
      {colors.map(color => (
        <>
          <Text size={7}>Color: {color}</Text>
          <Divider />
          <SwatchContainer>
            {Object.keys(colorPalette[color]).map(variant => (
              <div key={variant}>
                <ColorSwatch color={color} variant={variant}>
                  <ColorVariant>{colorPalette[color][variant]}</ColorVariant>
                </ColorSwatch>
              </div>
            ))}
          </SwatchContainer>
        </>
      ))}
    </>
  ))
