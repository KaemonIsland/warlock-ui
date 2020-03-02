import React, { useState, Children, cloneElement } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledFlipCard = styled.div(({ flipped, flipDirection }) => {
  // prettier-ignore
  const frontFlip = flipDirection === 'horizontal' ? 'rotateY(-180deg)' : 'rotateX(-180deg)'

  // prettier-ignore
  const backFlip = flipDirection === 'horizontal' ? 'rotateY(0deg)' : 'rotateX(0deg)'

  return {
    perspective: '1000px',
    height: '100%',
    width: '100%',
    position: 'relative',
    '& div:first-child': {
      transform: flipped && frontFlip,
    },
    '& div:last-child': {
      transform: flipped && backFlip,
    },
  }
})

export const FlipCard = ({ flipDirection = 'horizontal', children }) => {
  const [flipped, setFlipped] = useState(false)

  // prettier-ignore
  return (
    <StyledFlipCard
      onClick={() => setFlipped(!flipped)}
      flipDirection={flipDirection}
      flipped={flipped}
    >
      {
        Children.map(children, child => cloneElement(child, { flipDirection }))
      }
    </StyledFlipCard>
  )
}

FlipCard.propTypes = {
  children: PropTypes.node.isRequired,
  flipDirection: PropTypes.oneOf(['horizontal', 'vertical']),
}

// prettier-ignore
const StyledCardSide = styled.div(
  ({
    backgroundColor,
    side,
    theme,
    isPaddingless,
    flipDirection = 'horizontal',
  }) => {
    const front = flipDirection === 'horizontal'
      ? 'rotateY(0deg)'
      : 'rotateX(0deg)'

    const back = flipDirection === 'horizontal'
      ? 'rotateY(180deg)'
      : 'rotateX(180deg)'

    return {
      backgroundColor,
      transform: side === 'front' ? front : back,
      padding: isPaddingless ? 'auto' : '0.5rem',
      boxShadow: theme.boxShadow.single[2],
      position: 'absolute',
      transformStyle: 'preserve-3d',
      transition: 'all 400ms ease',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      border: '2px solid black',
      borderRadius: '0.5rem',
    }
  },
)

export const CardSide = ({
  backgroundColor,
  side,
  isPaddingless = false,
  flipDirection,
  children,
}) => {
  const cardStyles = {
    backgroundColor,
    isPaddingless,
    side,
    flipDirection,
  }
  return <StyledCardSide {...cardStyles}>{children}</StyledCardSide>
}

CardSide.propTypes = {
  children: PropTypes.node.isRequired,
  side: PropTypes.oneOf(['front', 'back']),
  backgroundColor: PropTypes.string,
  isPaddingless: PropTypes.bool,
  flipDirection: PropTypes.oneOf(['horizontal', 'vertical']),
}
