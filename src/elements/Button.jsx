import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button(({ theme, shadowColor, isFullwidth }) => ({
  width: isFullwidth ? '100%' : 'auto',
  maxWidth: '100%',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  padding: '0.5rem 1.5rem',
  borderRadius: '20rem',
  transition: 'all 200ms',
  margin: '1rem',
  position: 'relative',
  cursor: 'pointer',
  color: 'black',
  border: '2px solid black',
  backgroundColor: 'white',
  textTransform: 'uppercase',
  overflow: 'hidden',
  '&:hover, &:focus': {
    transform: 'translateY(-0.3rem)',
    boxShadow: theme.shadow[shadowColor].medium,
  },
  '&:active': {
    outline: 'none',
    transform: 'translateY(-0.1rem)',
    boxShadow: theme.shadow[shadowColor].small,
  },
}))

export const Button = ({
  callback,
  title,
  shadowColor = 'primary',
  isFullwidth = false,
}) => {
  const buttonStyles = {
    shadowColor,
    isFullwidth,
  }
  return (
    <StyledButton {...buttonStyles} onClick={callback}>
      {title}
    </StyledButton>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  shadowColor: PropTypes.oneOf(['gray', 'primary']),
  isFullwidth: PropTypes.bool,
}
