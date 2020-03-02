import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button(({ theme }) => ({
  fontSize: theme.formatFontSize(4),
  textTransform: 'uppercase',
  padding: `${theme.formatSpace(2)} ${theme.formatSpace(5)}`,
  fontSize: theme.formatFontSize(3),
  borderRadius: '0.5rem',
  transition: 'all 200ms',
  position: 'relative',
  cursor: 'pointer',
  color: 'black',
  border: '1px solid black',
  backgroundColor: 'white',
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

export const Button = ({ callback, title }) => (
  <StyledButton onClick={callback}>{title}</StyledButton>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
}
