import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from '../../typography'

const DisclosureContainer = styled.details`
  position: relative;
`

const DisclosureSummary = styled.summary`
  border: none;
  text-transform: uppercase;
`

export const Disclosure = ({
  summary = '',
  isOpen = false,
  summaryProps = {},
  containerProps = {},
  children,
}) => {
  return (
    <DisclosureContainer open={isOpen} {...containerProps}>
      <DisclosureSummary>
        <Text display="inline" family="Roboto" {...summaryProps}>
          {summary}
        </Text>
      </DisclosureSummary>
      {children}
    </DisclosureContainer>
  )
}

Disclosure.propTypes = {
  summary: PropTypes.string,
  isOpen: PropTypes.bool,
  summaryProps: PropTypes.object,
  containerProps: PropTypes.object,
  children: PropTypes.node,
}
