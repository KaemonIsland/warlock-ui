import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button(({ theme, color, shade, rounded }) => {
  let borderRadius
  switch (rounded) {
    case 'small':
      borderRadius = theme.spaceScale(1)
      break
    case 'medium':
      borderRadius = theme.spaceScale(2)
      break
    case 'large':
      borderRadius = theme.spaceScale(4)
      break
    case 'full':
      borderRadius = theme.spaceScale(16)
      break
    default:
      borderRadius = '0rem'
  }

  return {
    fontFamily: 'roboto, sans-serif',
    lineHeight: theme.spaceScale(5),
    fontWeight: 500,
    fontSize: theme.fontScale(2),
    textTransform: 'uppercase',
    padding: `${theme.spaceScale(1)} ${theme.spaceScale(4)}`,
    borderRadius,
    transition: 'all 200ms',
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
  }
})

export const Button = ({
  color,
  shade,
  type = 'button',
  rounded = 'small',
  children,
  ...rest
}) => {
  const buttonStyles = {
    color,
    shade,
    type,
    rounded,
    ...rest,
  }
  return <StyledButton {...buttonStyles}>{children}</StyledButton>
}

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  shade: PropTypes.number,
  rounded: PropTypes.string,
  children: PropTypes.node,
}
