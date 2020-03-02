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
    marginBottom: theme.formatSpace(4),
  },
  '& h4': {
    marginBottom: theme.formatSpace(2),
  },
}))

export const Fallback = ({ image, imageAlt, message, children }) => (
  <FallbackContainer>
    <Image width="12" image={image} alt={imageAlt} />
    <Text size="7" as="h4">
      {message}
    </Text>
    {children}
  </FallbackContainer>
)

Fallback.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.node,
}
