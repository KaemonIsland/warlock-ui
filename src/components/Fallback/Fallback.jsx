import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Image } from '../../elements'
import { Text } from '../../typography'

const FallbackContainer = styled.section(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  width: '100%',
  '& figure': {
    marginBottom: theme.spaceScale(4),
  },
  '& h4': {
    marginBottom: theme.spaceScale(2),
  },
}))

export const Fallback = ({
  image = '',
  imageAlt = '',
  size = 'medium',
  messageProps = {},
  message = '',
  children,
}) => {
  const getImageSize = (imageSize) => {
    switch (imageSize) {
      case 'xLarge':
        return 14
      case 'large':
        return 13
      case 'medium':
        return 12
      case 'small':
        return 11
      default:
        return imageSize
    }
  }
  return (
    <FallbackContainer>
      <Image width={getImageSize(size)} image={image} alt={imageAlt} />
      <Text size="7" align="center" as="h4" {...messageProps}>
        {message}
      </Text>
      {children}
    </FallbackContainer>
  )
}

Fallback.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSize: PropTypes.oneOf(['small', 'medium', 'large', 'xLarge']),
  message: PropTypes.string,
  children: PropTypes.node,
}
