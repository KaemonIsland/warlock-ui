import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextContainer = styled.p(
  ({ theme, size, isBold, isItalics, align, isUpcase, display }) => ({
    fontSize: `${theme.fontSizes[size]}rem`,
    fontWeight: isBold ? 'bold' : '',
    fontStyle: isItalics ? 'italic' : 'normal',
    alignText: align,
    textTransform: isUpcase && 'uppercase',
    display,
  })
)

export const Text = ({
  size = 3,
  isBold = false,
  isItalics = false,
  align = 'left',
  isUpcase = false,
  display = 'block',
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
  children: PropTypes.node,
}
