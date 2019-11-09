import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledFlipCard = styled.div(() => ({
  perspective: '1000px',
  height: '100%',
  width: '100%',
  position: 'relative',
  '&:hover div:first-child': {
    transform: 'rotateY(-180deg)',
  },
  '&:hover div:last-child': {
    transform: 'rotateY(0deg)',
  },
}))

export const FlipCard = ({ children }) => (
  <StyledFlipCard>{children}</StyledFlipCard>
)

FlipCard.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledCardSide = styled.div(({ backgroundColor, side, theme }) => ({
  backgroundColor,
  transform: side === 'front' ? 'rotateY(0deg)' : 'rotateY(180deg)',
  padding: '0.5rem',
  boxShadow: theme.shadow.primary.medium,
  position: 'absolute',
  transformStyle: 'preserve-3d',
  transition: 'all 400ms ease',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
}))

export const CardSide = ({ backgroundColor = 'lightblue', side, children }) => (
  <StyledCardSide side={side} backgroundColor={backgroundColor}>
    {children}
  </StyledCardSide>
)

CardSide.propTypes = {
  children: PropTypes.node.isRequired,
  side: PropTypes.oneOf(['front', 'back']),
  backgroundColor: PropTypes.string,
}
