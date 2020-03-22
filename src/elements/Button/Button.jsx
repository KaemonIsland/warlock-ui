import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button(({ theme, color, shade }) => ({
  fontSize: theme.fontScale(4),
  textTransform: 'uppercase',
  padding: `${theme.spaceScale(2)} ${theme.spaceScale(5)}`,
  fontSize: theme.fontScale(3),
  borderRadius: '0.5rem',
  transition: 'all 200ms',
  position: 'relative',
  cursor: 'pointer',
  color: theme.textContrast(
    color ? theme.color[color][shade || 1] : 'hsl(0, 100%, 100%)'
  ),
  border: '1px solid black',
  backgroundColor: color ? theme.color[color][shade || 1] : 'white',
  '&:hover, &:focus': {
    transform: 'translateY(-0.3rem)',
    boxShadow: theme.boxShadow.single[2],
  },
  '&:active': {
    outline: 'none',
    transform: 'translateY(-0.1rem)',
    boxShadow: theme.boxShadow.single[1],
  },
}))

export const Button = ({ callback, color, shade, children }) => (
  <StyledButton color={color} shade={shade} onClick={callback}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  callback: PropTypes.func,
  color: PropTypes.string,
  shade: PropTypes.number,
  children: PropTypes.node,
}
