import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextContainer = styled.p(
  ({
    theme,
    size,
    isBold,
    isItalics,
    align,
    isUpcase,
    display,
    color,
    shade,
    family,
    weight = 400,
    lineHeight,
    spacing,
  }) => ({
    fontFamily: `${family}, sans-serif`,
    lineHeight,
    letterSpacing: spacing,
    fontSize: `${theme.fontSizes[size]}rem`,
    fontWeight: isBold ? 'bold' : weight,
    fontStyle: isItalics ? 'italic' : 'normal',
    alignText: align,
    textTransform: isUpcase && 'uppercase',
    display,
    color: color !== 'black' ? theme.color[color][shade] : 'black',
  })
)

export const Text = ({
  size = 3,
  isBold = false,
  isItalics = false,
  align = 'left',
  isUpcase = false,
  display = 'block',
  color = 'black',
  shade = 0,
  family,
  weight,
  lineHeight,
  spacing,
  children,
  ...rest
}) => {
  const textProps = {
    size,
    isBold,
    isItalics,
    align,
    isUpcase,
    display,
    color,
    shade,
    family,
    weight,
    lineHeight,
    spacing,
    ...rest,
  }
  return <TextContainer {...textProps}>{children}</TextContainer>
}

Text.propTypes = {
  size: PropTypes.number,
  isBold: PropTypes.bool,
  isItalics: PropTypes.bool,
  align: PropTypes.string,
  isUpcase: PropTypes.bool,
  display: PropTypes.string,
  color: PropTypes.string,
  shade: PropTypes.number,
  family: PropTypes.string,
  weight: PropTypes.string,
  lineHeight: PropTypes.number,
  spacing: PropTypes.number,
  children: PropTypes.node,
}
