import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextContainer = styled.p(({ theme, size, isBold, isItalics }) => ({
  fontSize: `${theme.fontSizes[size]}rem`,
  fontWeight: isBold ? 'bold' : '',
  fontStyle: isItalics ? 'italic' : 'normal',
}))

export const Text = ({
  size = 3,
  isBold = false,
  isItalics = false,
  children,
  ...rest
}) => {
  const textProps = { size, isBold, isItalics, rest }
  return <TextContainer {...textProps}>{children}</TextContainer>
}

Text.propTypes = {
  size: PropTypes.number,
  isBold: PropTypes.bool,
  isItalics: PropTypes.bool,
  children: PropTypes.node,
}
